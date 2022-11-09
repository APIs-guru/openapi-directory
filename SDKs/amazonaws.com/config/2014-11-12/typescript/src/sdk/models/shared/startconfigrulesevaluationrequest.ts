import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartConfigRulesEvaluationRequest
/** 
 * <p/>
**/
export class StartConfigRulesEvaluationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleNames" })
  configRuleNames?: string[];
}
