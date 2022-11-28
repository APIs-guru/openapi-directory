import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
**/
export declare class Evaluation extends SpeakeasyBase {
    approvalRulesNotSatisfied?: string[];
    approvalRulesSatisfied?: string[];
    approved?: boolean;
    overridden?: boolean;
}
