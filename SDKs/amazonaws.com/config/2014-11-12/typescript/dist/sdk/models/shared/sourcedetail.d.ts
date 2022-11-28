import { SpeakeasyBase } from "../../../internal/utils";
import { EventSourceEnum } from "./eventsourceenum";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.
**/
export declare class SourceDetail extends SpeakeasyBase {
    eventSource?: EventSourceEnum;
    maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;
    messageType?: MessageTypeEnum;
}
