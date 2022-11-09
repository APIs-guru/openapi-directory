import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LateDataRuleConfiguration } from "./latedataruleconfiguration";
/**
 * A structure that contains the name and configuration information of a late data rule.
**/
export declare class LateDataRule extends SpeakeasyBase {
    ruleConfiguration: LateDataRuleConfiguration;
    ruleName?: string;
}
