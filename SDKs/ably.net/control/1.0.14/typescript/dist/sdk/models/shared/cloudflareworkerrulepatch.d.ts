import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum CloudflareWorkerRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum CloudflareWorkerRulePatchRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}
export declare enum CloudflareWorkerRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class CloudflareWorkerRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class CloudflareWorkerRulePatchTarget extends SpeakeasyBase {
    headers?: CloudflareWorkerRulePatchTargetHeaders[];
    signingKeyId?: string;
    url?: string;
}
export declare class CloudflareWorkerRulePatch extends SpeakeasyBase {
    requestMode?: CloudflareWorkerRulePatchRequestModeEnum;
    ruleType?: CloudflareWorkerRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: CloudflareWorkerRulePatchStatusEnum;
    target?: CloudflareWorkerRulePatchTarget;
}
