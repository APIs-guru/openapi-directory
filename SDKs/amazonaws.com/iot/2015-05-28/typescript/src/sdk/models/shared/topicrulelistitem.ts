import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TopicRuleListItem
/** 
 * Describes a rule.
**/
export class TopicRuleListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=ruleArn" })
  ruleArn?: string;

  @Metadata({ data: "json, name=ruleDisabled" })
  ruleDisabled?: boolean;

  @Metadata({ data: "json, name=ruleName" })
  ruleName?: string;

  @Metadata({ data: "json, name=topicPattern" })
  topicPattern?: string;
}
