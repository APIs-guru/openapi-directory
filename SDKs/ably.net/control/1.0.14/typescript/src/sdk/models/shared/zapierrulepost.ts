import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum ZapierRulePostRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum ZapierRulePostRuleTypeEnum {
    HttpZapier = "http/zapier"
}

export enum ZapierRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class ZapierRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ZapierRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.ZapierRulePostTargetHeaders })
  headers?: ZapierRulePostTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class ZapierRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: ZapierRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: ZapierRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: ZapierRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: ZapierRulePostTarget;
}
