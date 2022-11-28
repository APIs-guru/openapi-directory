import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum ZapierRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum ZapierRuleResponseRuleTypeEnum {
    HttpZapier = "http/zapier"
}

export enum ZapierRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class ZapierRuleResponseTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ZapierRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: ZapierRuleResponseTargetHeaders })
  headers?: ZapierRuleResponseTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ZapierRuleResponse extends SpeakeasyBase {
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
  requestMode: ZapierRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: ZapierRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ZapierRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: ZapierRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
