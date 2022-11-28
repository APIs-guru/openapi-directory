import { SpeakeasyBase } from "../../../internal/utils";
import { TopicRuleListItem } from "./topicrulelistitem";
/**
 * The output from the ListTopicRules operation.
**/
export declare class ListTopicRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    rules?: TopicRuleListItem[];
}
