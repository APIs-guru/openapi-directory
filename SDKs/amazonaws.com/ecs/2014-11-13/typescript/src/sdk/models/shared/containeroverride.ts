import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValuePair } from "./keyvaluepair";
import { EnvironmentFile } from "./environmentfile";
import { ResourceRequirement } from "./resourcerequirement";


// ContainerOverride
/** 
 * The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
**/
export class ContainerOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: KeyValuePair[];

  @Metadata({ data: "json, name=environmentFiles", elemType: shared.EnvironmentFile })
  environmentFiles?: EnvironmentFile[];

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=memoryReservation" })
  memoryReservation?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];
}
