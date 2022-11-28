import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum CloudflareWorkerRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum CloudflareWorkerRulePostRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}

export enum CloudflareWorkerRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class CloudflareWorkerRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class CloudflareWorkerRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: CloudflareWorkerRulePostTargetHeaders })
  headers?: CloudflareWorkerRulePostTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CloudflareWorkerRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: CloudflareWorkerRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: CloudflareWorkerRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CloudflareWorkerRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: CloudflareWorkerRulePostTarget;
}
