import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionCheck } from "./conditioncheck";
import { Delete } from "./delete";
import { Put } from "./put";
import { Update } from "./update";
/**
 * A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
**/
export declare class TransactWriteItem extends SpeakeasyBase {
    conditionCheck?: ConditionCheck;
    delete?: Delete;
    put?: Put;
    update?: Update;
}
