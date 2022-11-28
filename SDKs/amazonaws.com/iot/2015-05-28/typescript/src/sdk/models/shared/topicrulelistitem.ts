import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TopicRuleListItem
/** 
 * Describes a rule.
**/
export class TopicRuleListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ruleArn" })
  ruleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleDisabled" })
  ruleDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName?: string;

  @SpeakeasyMetadata({ data: "json, name=topicPattern" })
  topicPattern?: string;
}
