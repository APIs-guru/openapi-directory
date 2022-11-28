import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WriteRequest } from "./writerequest";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";



// BatchWriteItemInput
/** 
 * Represents the input of a <code>BatchWriteItem</code> operation.
**/
export class BatchWriteItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestItems", elemType: WriteRequest, elemDepth: 2 })
  requestItems: Map<string, WriteRequest[]>;

  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;
}
