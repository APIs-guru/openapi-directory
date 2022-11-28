import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
import { EnvironmentFile } from "./environmentfile";
import { ResourceRequirement } from "./resourcerequirement";



// ContainerOverride
/** 
 * The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
**/
export class ContainerOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=environment", elemType: KeyValuePair })
  environment?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=environmentFiles", elemType: EnvironmentFile })
  environmentFiles?: EnvironmentFile[];

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryReservation" })
  memoryReservation?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];
}
