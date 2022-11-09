import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValuePair } from "./keyvaluepair";
import { ResourceRequirement } from "./resourcerequirement";


// ContainerOverrides
/** 
 * The overrides that should be sent to a container.
**/
export class ContainerOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: KeyValuePair[];

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
