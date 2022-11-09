import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WriteRequest } from "./writerequest";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";


// BatchWriteItemInput
/** 
 * Represents the input of a <code>BatchWriteItem</code> operation.
**/
export class BatchWriteItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestItems", elemType: shared.WriteRequest, elemDepth: 2 })
  requestItems: Map<string, WriteRequest[]>;

  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @Metadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;
}
