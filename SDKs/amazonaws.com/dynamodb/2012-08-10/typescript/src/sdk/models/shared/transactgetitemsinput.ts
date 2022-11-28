import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { TransactGetItem } from "./transactgetitem";



export class TransactGetItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=TransactItems", elemType: TransactGetItem })
  transactItems: TransactGetItem[];
}
