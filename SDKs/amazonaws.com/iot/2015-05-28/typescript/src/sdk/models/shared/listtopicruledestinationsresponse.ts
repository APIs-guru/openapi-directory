import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicRuleDestinationSummary } from "./topicruledestinationsummary";



export class ListTopicRuleDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationSummaries", elemType: TopicRuleDestinationSummary })
  destinationSummaries?: TopicRuleDestinationSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
