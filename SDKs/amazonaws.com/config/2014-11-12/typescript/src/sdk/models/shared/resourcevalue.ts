import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceValueTypeEnum } from "./resourcevaluetypeenum";


// ResourceValue
/** 
 * The dynamic value of the resource.
**/
export class ResourceValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Value" })
  value: ResourceValueTypeEnum;
}
