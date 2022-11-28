import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicRule } from "./topicrule";



// GetTopicRuleResponse
/** 
 * The output from the GetTopicRule operation.
**/
export class GetTopicRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: TopicRule;

  @SpeakeasyMetadata({ data: "json, name=ruleArn" })
  ruleArn?: string;
}
