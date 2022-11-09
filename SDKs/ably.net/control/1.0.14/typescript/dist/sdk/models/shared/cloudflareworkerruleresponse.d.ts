import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum CloudflareWorkerRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum CloudflareWorkerRuleResponseRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}
export declare enum CloudflareWorkerRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class CloudflareWorkerRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class CloudflareWorkerRuleResponseTarget extends SpeakeasyBase {
    headers?: CloudflareWorkerRuleResponseTargetHeaders[];
    signingKeyId?: string;
    url: string;
}
export declare class CloudflareWorkerRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: CloudflareWorkerRuleResponseRequestModeEnum;
    ruleType: CloudflareWorkerRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: CloudflareWorkerRuleResponseStatusEnum;
    target: CloudflareWorkerRuleResponseTarget;
    version?: string;
}
