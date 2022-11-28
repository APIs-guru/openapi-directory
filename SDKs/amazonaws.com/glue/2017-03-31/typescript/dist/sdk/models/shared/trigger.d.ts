import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";
import { TriggerStateEnum } from "./triggerstateenum";
import { TriggerTypeEnum } from "./triggertypeenum";
/**
 * Information about a specific trigger.
**/
export declare class Trigger extends SpeakeasyBase {
    actions?: Action[];
    description?: string;
    eventBatchingCondition?: EventBatchingCondition;
    id?: string;
    name?: string;
    predicate?: Predicate;
    schedule?: string;
    state?: TriggerStateEnum;
    type?: TriggerTypeEnum;
    workflowName?: string;
}
