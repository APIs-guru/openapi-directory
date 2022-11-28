import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { TransactWriteItem } from "./transactwriteitem";



export class TransactWriteItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;

  @SpeakeasyMetadata({ data: "json, name=TransactItems", elemType: TransactWriteItem })
  transactItems: TransactWriteItem[];
}
