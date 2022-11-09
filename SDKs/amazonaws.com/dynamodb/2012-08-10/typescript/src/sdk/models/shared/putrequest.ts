import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// PutRequest
/** 
 * Represents a request to perform a <code>PutItem</code> operation on an item.
**/
export class PutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item: Map<string, AttributeValue>;
}
