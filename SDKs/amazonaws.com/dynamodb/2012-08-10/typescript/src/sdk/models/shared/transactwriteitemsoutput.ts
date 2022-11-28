import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";



export class TransactWriteItemsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity", elemType: ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @SpeakeasyMetadata({ data: "json, name=ItemCollectionMetrics", elemType: ItemCollectionMetrics, elemDepth: 2 })
  itemCollectionMetrics?: Map<string, ItemCollectionMetrics[]>;
}
