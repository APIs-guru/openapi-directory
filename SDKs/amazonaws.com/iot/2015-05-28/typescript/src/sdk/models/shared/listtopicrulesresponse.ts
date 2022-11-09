import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TopicRuleListItem } from "./topicrulelistitem";


// ListTopicRulesResponse
/** 
 * The output from the ListTopicRules operation.
**/
export class ListTopicRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.TopicRuleListItem })
  rules?: TopicRuleListItem[];
}
