import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldInfo } from "./fieldinfo";



// QueryInfo
/** 
 * Details about the query.
**/
export class QueryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SelectFields", elemType: FieldInfo })
  selectFields?: FieldInfo[];
}
