import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// BatchResponse
/** 
 * The item attributes from a response in a specific table, along with the read resources consumed on the table during the request.
**/
export class BatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];
}
