import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum CloudflareWorkerRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum CloudflareWorkerRulePostRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}
export declare enum CloudflareWorkerRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class CloudflareWorkerRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class CloudflareWorkerRulePostTarget extends SpeakeasyBase {
    headers?: CloudflareWorkerRulePostTargetHeaders[];
    signingKeyId?: string;
    url: string;
}
export declare class CloudflareWorkerRulePost extends SpeakeasyBase {
    requestMode: CloudflareWorkerRulePostRequestModeEnum;
    ruleType: CloudflareWorkerRulePostRuleTypeEnum;
    source: RuleSource;
    status?: CloudflareWorkerRulePostStatusEnum;
    target: CloudflareWorkerRulePostTarget;
}
