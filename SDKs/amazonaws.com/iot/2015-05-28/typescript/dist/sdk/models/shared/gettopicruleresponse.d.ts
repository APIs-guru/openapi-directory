import { SpeakeasyBase } from "../../../internal/utils";
import { TopicRule } from "./topicrule";
/**
 * The output from the GetTopicRule operation.
**/
export declare class GetTopicRuleResponse extends SpeakeasyBase {
    rule?: TopicRule;
    ruleArn?: string;
}
