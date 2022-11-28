import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { RuleCondition } from "./rulecondition";
/**
 * Information about a rule.
**/
export declare class Rule extends SpeakeasyBase {
    actions?: Action[];
    conditions?: RuleCondition[];
    isDefault?: boolean;
    priority?: string;
    ruleArn?: string;
}
