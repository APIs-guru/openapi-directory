import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleStateEnum } from "./configrulestateenum";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { Scope } from "./scope";
import { Source } from "./source";
/**
 * <p>An Config rule represents an Lambda function that you create for a custom rule or a predefined function for an Config managed rule. The function evaluates configuration items to assess whether your Amazon Web Services resources comply with your desired configurations. This function can run when Config detects a configuration change to an Amazon Web Services resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Amazon Web Services resource Configurations with Config</a> in the <i>Config Developer Guide</i>.</p>
**/
export declare class ConfigRule extends SpeakeasyBase {
    configRuleArn?: string;
    configRuleId?: string;
    configRuleName?: string;
    configRuleState?: ConfigRuleStateEnum;
    createdBy?: string;
    description?: string;
    inputParameters?: string;
    maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;
    scope?: Scope;
    source: Source;
}
