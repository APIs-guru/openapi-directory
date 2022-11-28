import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemResponse } from "./itemresponse";



export class TransactGetItemsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity", elemType: ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: ItemResponse })
  responses?: ItemResponse[];
}
