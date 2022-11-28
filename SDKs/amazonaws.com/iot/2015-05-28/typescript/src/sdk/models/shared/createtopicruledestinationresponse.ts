import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicRuleDestination } from "./topicruledestination";



export class CreateTopicRuleDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicRuleDestination" })
  topicRuleDestination?: TopicRuleDestination;
}
