import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";



// PutItemOutput
/** 
 * Represents the output of a <code>PutItem</code> operation.
**/
export class PutItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeValue })
  attributes?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity" })
  consumedCapacity?: ConsumedCapacity;

  @SpeakeasyMetadata({ data: "json, name=ItemCollectionMetrics" })
  itemCollectionMetrics?: ItemCollectionMetrics;
}
