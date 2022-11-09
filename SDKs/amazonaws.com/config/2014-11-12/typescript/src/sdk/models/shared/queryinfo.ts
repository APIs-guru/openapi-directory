import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldInfo } from "./fieldinfo";


// QueryInfo
/** 
 * Details about the query.
**/
export class QueryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=SelectFields", elemType: shared.FieldInfo })
  selectFields?: FieldInfo[];
}
