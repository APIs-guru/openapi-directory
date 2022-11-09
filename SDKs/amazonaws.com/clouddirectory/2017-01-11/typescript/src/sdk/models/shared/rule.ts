import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleTypeEnum } from "./ruletypeenum";


// Rule
/** 
 * Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type?: RuleTypeEnum;
}
