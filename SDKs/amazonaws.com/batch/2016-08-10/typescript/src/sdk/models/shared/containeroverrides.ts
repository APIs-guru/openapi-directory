import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
import { ResourceRequirement } from "./resourcerequirement";



// ContainerOverrides
/** 
 * The overrides that should be sent to a container.
**/
export class ContainerOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment", elemType: KeyValuePair })
  environment?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
