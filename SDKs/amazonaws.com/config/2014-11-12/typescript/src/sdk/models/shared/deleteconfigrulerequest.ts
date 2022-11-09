import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteConfigRuleRequest
/** 
 * <p/>
**/
export class DeleteConfigRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;
}
