import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";
import { TriggerTypeEnum } from "./triggertypeenum";
export declare class CreateTriggerRequest extends SpeakeasyBase {
    actions: Action[];
    description?: string;
    eventBatchingCondition?: EventBatchingCondition;
    name: string;
    predicate?: Predicate;
    schedule?: string;
    startOnCreation?: boolean;
    tags?: Map<string, string>;
    type: TriggerTypeEnum;
    workflowName?: string;
}
