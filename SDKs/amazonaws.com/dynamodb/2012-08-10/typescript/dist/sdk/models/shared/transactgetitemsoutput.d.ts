import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemResponse } from "./itemresponse";
export declare class TransactGetItemsOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    responses?: ItemResponse[];
}
