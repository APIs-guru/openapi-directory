import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum HttpRulePatchRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum HttpRulePatchRuleTypeEnum {
    Http = "http"
}

export enum HttpRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum HttpRulePatchTargetFormatEnum {
    Json = "json"
,    Msgpack = "msgpack"
}


export class HttpRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class HttpRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: HttpRulePatchTargetFormatEnum;

  @Metadata({ data: "json, name=headers", elemType: shared.HttpRulePatchTargetHeaders })
  headers?: HttpRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class HttpRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: HttpRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: HttpRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: HttpRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: HttpRulePatchTarget;
}
