import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum CloudflareWorkerRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum CloudflareWorkerRulePatchRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}

export enum CloudflareWorkerRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class CloudflareWorkerRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class CloudflareWorkerRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: CloudflareWorkerRulePatchTargetHeaders })
  headers?: CloudflareWorkerRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class CloudflareWorkerRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: CloudflareWorkerRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: CloudflareWorkerRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CloudflareWorkerRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: CloudflareWorkerRulePatchTarget;
}
