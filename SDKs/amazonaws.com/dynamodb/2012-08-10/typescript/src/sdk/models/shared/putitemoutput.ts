import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";


// PutItemOutput
/** 
 * Represents the output of a <code>PutItem</code> operation.
**/
export class PutItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeValue })
  attributes?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ConsumedCapacity" })
  consumedCapacity?: ConsumedCapacity;

  @Metadata({ data: "json, name=ItemCollectionMetrics" })
  itemCollectionMetrics?: ItemCollectionMetrics;
}
