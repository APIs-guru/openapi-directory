import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";


export class TransactWriteItemsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacity", elemType: shared.ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @Metadata({ data: "json, name=ItemCollectionMetrics", elemType: shared.ItemCollectionMetrics, elemDepth: 2 })
  itemCollectionMetrics?: Map<string, ItemCollectionMetrics[]>;
}
