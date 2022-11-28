import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";
/**
 * A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
**/
export declare class TriggerUpdate extends SpeakeasyBase {
    actions?: Action[];
    description?: string;
    eventBatchingCondition?: EventBatchingCondition;
    name?: string;
    predicate?: Predicate;
    schedule?: string;
}
