import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// CreateMatchmakingRuleSetInput
/** 
 * Represents the input for a request operation.
**/
export class CreateMatchmakingRuleSetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RuleSetBody" })
  ruleSetBody: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
