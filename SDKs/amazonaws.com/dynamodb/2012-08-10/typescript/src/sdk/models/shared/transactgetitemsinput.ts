import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { TransactGetItem } from "./transactgetitem";


export class TransactGetItemsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @Metadata({ data: "json, name=TransactItems", elemType: shared.TransactGetItem })
  transactItems: TransactGetItem[];
}
