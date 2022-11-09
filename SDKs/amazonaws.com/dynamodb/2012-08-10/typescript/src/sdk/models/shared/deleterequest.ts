import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// DeleteRequest
/** 
 * Represents a request to perform a <code>DeleteItem</code> operation on an item.
**/
export class DeleteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key", elemType: shared.AttributeValue })
  key: Map<string, AttributeValue>;
}
