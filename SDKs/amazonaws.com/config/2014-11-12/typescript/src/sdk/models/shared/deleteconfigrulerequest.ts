import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteConfigRuleRequest
/** 
 * <p/>
**/
export class DeleteConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;
}
