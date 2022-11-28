import { SpeakeasyBase } from "../../../internal/utils";
import { RuleStateEnum } from "./rulestateenum";
import { Tag } from "./tag";
export declare class PutRuleRequest extends SpeakeasyBase {
    description?: string;
    eventBusName?: string;
    eventPattern?: string;
    name: string;
    roleArn?: string;
    scheduleExpression?: string;
    state?: RuleStateEnum;
    tags?: Tag[];
}
