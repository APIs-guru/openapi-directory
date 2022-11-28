import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartConfigRulesEvaluationRequest
/** 
 * <p/>
**/
export class StartConfigRulesEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];
}
