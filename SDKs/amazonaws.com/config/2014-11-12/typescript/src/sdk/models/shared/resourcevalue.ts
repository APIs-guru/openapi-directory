import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceValueTypeEnum } from "./resourcevaluetypeenum";



// ResourceValue
/** 
 * The dynamic value of the resource.
**/
export class ResourceValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: ResourceValueTypeEnum;
}
