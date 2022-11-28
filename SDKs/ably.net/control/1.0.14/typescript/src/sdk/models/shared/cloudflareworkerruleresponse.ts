import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum CloudflareWorkerRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum CloudflareWorkerRuleResponseRuleTypeEnum {
    HttpCloudflareWorker = "http/cloudflare-worker"
}

export enum CloudflareWorkerRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class CloudflareWorkerRuleResponseTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class CloudflareWorkerRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: CloudflareWorkerRuleResponseTargetHeaders })
  headers?: CloudflareWorkerRuleResponseTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CloudflareWorkerRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: number;

  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: CloudflareWorkerRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: CloudflareWorkerRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CloudflareWorkerRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: CloudflareWorkerRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
