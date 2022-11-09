import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum CloudflareWorkerRulePostRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum CloudflareWorkerRulePostRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}

export enum CloudflareWorkerRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class CloudflareWorkerRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class CloudflareWorkerRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.CloudflareWorkerRulePostTargetHeaders })
  headers?: CloudflareWorkerRulePostTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CloudflareWorkerRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: CloudflareWorkerRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: CloudflareWorkerRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: CloudflareWorkerRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: CloudflareWorkerRulePostTarget;
}
