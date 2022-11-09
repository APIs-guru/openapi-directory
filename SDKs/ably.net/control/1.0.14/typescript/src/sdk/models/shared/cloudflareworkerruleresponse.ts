import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum CloudflareWorkerRuleResponseRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum CloudflareWorkerRuleResponseRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}

export enum CloudflareWorkerRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class CloudflareWorkerRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class CloudflareWorkerRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.CloudflareWorkerRuleResponseTargetHeaders })
  headers?: CloudflareWorkerRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CloudflareWorkerRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=created" })
  created?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: number;

  @Metadata({ data: "json, name=requestMode" })
  requestMode: CloudflareWorkerRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: CloudflareWorkerRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: CloudflareWorkerRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: CloudflareWorkerRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
