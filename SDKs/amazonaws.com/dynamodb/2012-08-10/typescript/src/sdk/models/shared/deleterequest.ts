import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// DeleteRequest
/** 
 * Represents a request to perform a <code>DeleteItem</code> operation on an item.
**/
export class DeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key", elemType: AttributeValue })
  key: Map<string, AttributeValue>;
}
