import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicRuleDestination } from "./topicruledestination";


export class GetTopicRuleDestinationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicRuleDestination" })
  topicRuleDestination?: TopicRuleDestination;
}
