import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum ZapierRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum ZapierRulePatchRuleTypeEnum {
    HttpZapier = "http/zapier"
}

export enum ZapierRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class ZapierRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ZapierRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: ZapierRulePatchTargetHeaders })
  headers?: ZapierRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ZapierRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: ZapierRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: ZapierRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ZapierRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: ZapierRulePatchTarget;
}
