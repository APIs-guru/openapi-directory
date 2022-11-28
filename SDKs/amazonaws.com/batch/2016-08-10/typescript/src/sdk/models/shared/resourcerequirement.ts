import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ResourceRequirement
/** 
 * The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
**/
export class ResourceRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
