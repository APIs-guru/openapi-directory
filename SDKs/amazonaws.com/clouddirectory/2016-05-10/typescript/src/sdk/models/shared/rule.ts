import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";



// Rule
/** 
 * Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RuleTypeEnum;
}
