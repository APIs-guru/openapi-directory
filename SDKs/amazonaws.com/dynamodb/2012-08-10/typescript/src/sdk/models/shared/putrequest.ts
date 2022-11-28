import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// PutRequest
/** 
 * Represents a request to perform a <code>PutItem</code> operation on an item.
**/
export class PutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item: Map<string, AttributeValue>;
}
