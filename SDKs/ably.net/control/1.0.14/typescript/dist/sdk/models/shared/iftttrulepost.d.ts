import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum IftttRulePostRequestModeEnum {
    Single = "single"
}
export declare enum IftttRulePostRuleTypeEnum {
    HttpIfttt = "http/ifttt"
}
export declare enum IftttRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class IftttRulePostTarget extends SpeakeasyBase {
    eventName: string;
    webhookKey: string;
}
export declare class IftttRulePost extends SpeakeasyBase {
    requestMode: IftttRulePostRequestModeEnum;
    ruleType: IftttRulePostRuleTypeEnum;
    source: RuleSource;
    status?: IftttRulePostStatusEnum;
    target: IftttRulePostTarget;
}
