import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleStateEnum } from "./rulestateenum";
/**
 * Contains information about a rule in Amazon EventBridge.
**/
export declare class Rule extends SpeakeasyBase {
    arn?: string;
    description?: string;
    eventBusName?: string;
    eventPattern?: string;
    managedBy?: string;
    name?: string;
    roleArn?: string;
    scheduleExpression?: string;
    state?: RuleStateEnum;
}
