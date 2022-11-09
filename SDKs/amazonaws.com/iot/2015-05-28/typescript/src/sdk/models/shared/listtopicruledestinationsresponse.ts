import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TopicRuleDestinationSummary } from "./topicruledestinationsummary";


export class ListTopicRuleDestinationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationSummaries", elemType: shared.TopicRuleDestinationSummary })
  destinationSummaries?: TopicRuleDestinationSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
