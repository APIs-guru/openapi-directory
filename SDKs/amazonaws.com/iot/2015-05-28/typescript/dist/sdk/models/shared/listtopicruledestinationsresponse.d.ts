import { SpeakeasyBase } from "../../../internal/utils";
import { TopicRuleDestinationSummary } from "./topicruledestinationsummary";
export declare class ListTopicRuleDestinationsResponse extends SpeakeasyBase {
    destinationSummaries?: TopicRuleDestinationSummary[];
    nextToken?: string;
}
