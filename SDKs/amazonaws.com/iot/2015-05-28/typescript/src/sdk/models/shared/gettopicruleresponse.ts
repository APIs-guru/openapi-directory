import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicRule } from "./topicrule";


// GetTopicRuleResponse
/** 
 * The output from the GetTopicRule operation.
**/
export class GetTopicRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rule" })
  rule?: TopicRule;

  @Metadata({ data: "json, name=ruleArn" })
  ruleArn?: string;
}
