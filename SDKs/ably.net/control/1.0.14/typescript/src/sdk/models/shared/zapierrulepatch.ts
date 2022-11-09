import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum ZapierRulePatchRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum ZapierRulePatchRuleTypeEnum {
    HttpZapier = "http/zapier"
}

export enum ZapierRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class ZapierRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ZapierRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.ZapierRulePatchTargetHeaders })
  headers?: ZapierRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ZapierRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: ZapierRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: ZapierRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: ZapierRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: ZapierRulePatchTarget;
}
