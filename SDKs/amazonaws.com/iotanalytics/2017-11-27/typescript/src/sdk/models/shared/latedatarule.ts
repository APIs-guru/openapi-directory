import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LateDataRuleConfiguration } from "./latedataruleconfiguration";


// LateDataRule
/** 
 * A structure that contains the name and configuration information of a late data rule.
**/
export class LateDataRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ruleConfiguration" })
  ruleConfiguration: LateDataRuleConfiguration;

  @Metadata({ data: "json, name=ruleName" })
  ruleName?: string;
}
