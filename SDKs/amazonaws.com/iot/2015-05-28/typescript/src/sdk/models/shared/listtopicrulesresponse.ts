import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicRuleListItem } from "./topicrulelistitem";



// ListTopicRulesResponse
/** 
 * The output from the ListTopicRules operation.
**/
export class ListTopicRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: TopicRuleListItem })
  rules?: TopicRuleListItem[];
}
