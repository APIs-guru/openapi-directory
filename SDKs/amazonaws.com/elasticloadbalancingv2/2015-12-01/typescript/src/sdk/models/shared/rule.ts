import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { RuleCondition } from "./rulecondition";



// Rule
/** 
 * Information about a rule.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ elemType: RuleCondition })
  conditions?: RuleCondition[];

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  priority?: string;

  @SpeakeasyMetadata()
  ruleArn?: string;
}
