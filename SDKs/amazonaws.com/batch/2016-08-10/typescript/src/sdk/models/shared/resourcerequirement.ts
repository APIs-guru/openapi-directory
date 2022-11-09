import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ResourceRequirement
/** 
 * The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
**/
export class ResourceRequirement extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: ResourceTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
