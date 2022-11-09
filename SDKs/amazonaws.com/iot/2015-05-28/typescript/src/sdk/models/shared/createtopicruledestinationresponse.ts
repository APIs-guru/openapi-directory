import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicRuleDestination } from "./topicruledestination";


export class CreateTopicRuleDestinationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicRuleDestination" })
  topicRuleDestination?: TopicRuleDestination;
}
