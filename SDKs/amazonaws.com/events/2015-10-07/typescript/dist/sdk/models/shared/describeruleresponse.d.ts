import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleStateEnum } from "./rulestateenum";
export declare class DescribeRuleResponse extends SpeakeasyBase {
    arn?: string;
    createdBy?: string;
    description?: string;
    eventBusName?: string;
    eventPattern?: string;
    managedBy?: string;
    name?: string;
    roleArn?: string;
    scheduleExpression?: string;
    state?: RuleStateEnum;
}
