import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Describes a rule.
**/
export declare class TopicRule extends SpeakeasyBase {
    actions?: Action[];
    awsIotSqlVersion?: string;
    createdAt?: Date;
    description?: string;
    errorAction?: Action;
    ruleDisabled?: boolean;
    ruleName?: string;
    sql?: string;
}
