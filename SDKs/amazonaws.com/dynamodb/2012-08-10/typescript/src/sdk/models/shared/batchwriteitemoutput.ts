import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
import { WriteRequest } from "./writerequest";



// BatchWriteItemOutput
/** 
 * Represents the output of a <code>BatchWriteItem</code> operation.
**/
export class BatchWriteItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity", elemType: ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @SpeakeasyMetadata({ data: "json, name=ItemCollectionMetrics", elemType: ItemCollectionMetrics, elemDepth: 2 })
  itemCollectionMetrics?: Map<string, ItemCollectionMetrics[]>;

  @SpeakeasyMetadata({ data: "json, name=UnprocessedItems", elemType: WriteRequest, elemDepth: 2 })
  unprocessedItems?: Map<string, WriteRequest[]>;
}
