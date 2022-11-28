import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LateDataRuleConfiguration } from "./latedataruleconfiguration";



// LateDataRule
/** 
 * A structure that contains the name and configuration information of a late data rule.
**/
export class LateDataRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ruleConfiguration" })
  ruleConfiguration: LateDataRuleConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName?: string;
}
