import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemResponse } from "./itemresponse";


export class TransactGetItemsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacity", elemType: shared.ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @Metadata({ data: "json, name=Responses", elemType: shared.ItemResponse })
  responses?: ItemResponse[];
}
