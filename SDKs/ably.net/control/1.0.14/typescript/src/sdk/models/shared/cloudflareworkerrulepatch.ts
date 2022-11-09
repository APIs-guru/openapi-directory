import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum CloudflareWorkerRulePatchRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum CloudflareWorkerRulePatchRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}

export enum CloudflareWorkerRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class CloudflareWorkerRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class CloudflareWorkerRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.CloudflareWorkerRulePatchTargetHeaders })
  headers?: CloudflareWorkerRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class CloudflareWorkerRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: CloudflareWorkerRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: CloudflareWorkerRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: CloudflareWorkerRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: CloudflareWorkerRulePatchTarget;
}
