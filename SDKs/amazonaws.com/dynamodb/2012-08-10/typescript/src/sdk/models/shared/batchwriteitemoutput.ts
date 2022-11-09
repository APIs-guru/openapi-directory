import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
import { WriteRequest } from "./writerequest";


// BatchWriteItemOutput
/** 
 * Represents the output of a <code>BatchWriteItem</code> operation.
**/
export class BatchWriteItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacity", elemType: shared.ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @Metadata({ data: "json, name=ItemCollectionMetrics", elemType: shared.ItemCollectionMetrics, elemDepth: 2 })
  itemCollectionMetrics?: Map<string, ItemCollectionMetrics[]>;

  @Metadata({ data: "json, name=UnprocessedItems", elemType: shared.WriteRequest, elemDepth: 2 })
  unprocessedItems?: Map<string, WriteRequest[]>;
}
