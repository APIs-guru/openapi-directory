import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum ZapierRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum ZapierRulePostRuleTypeEnum {
    HttpZapier = "http/zapier"
}

export enum ZapierRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class ZapierRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ZapierRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: ZapierRulePostTargetHeaders })
  headers?: ZapierRulePostTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ZapierRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: ZapierRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: ZapierRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ZapierRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: ZapierRulePostTarget;
}
