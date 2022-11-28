import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// BatchResponse
/** 
 * The item attributes from a response in a specific table, along with the read resources consumed on the table during the request.
**/
export class BatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];
}
