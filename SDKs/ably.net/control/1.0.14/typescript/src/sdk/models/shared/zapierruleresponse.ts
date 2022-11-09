import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum ZapierRuleResponseRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum ZapierRuleResponseRuleTypeEnum {
    HttpZapier = "http/zapier"
}

export enum ZapierRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class ZapierRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ZapierRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.ZapierRuleResponseTargetHeaders })
  headers?: ZapierRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class ZapierRuleResponse extends SpeakeasyBase {
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
  requestMode: ZapierRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: ZapierRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: ZapierRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: ZapierRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
