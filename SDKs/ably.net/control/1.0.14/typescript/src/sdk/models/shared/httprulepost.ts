import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum HttpRulePostRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum HttpRulePostRuleTypeEnum {
    Http = "http"
}

export enum HttpRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum HttpRulePostTargetFormatEnum {
    Json = "json"
,    Msgpack = "msgpack"
}


export class HttpRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class HttpRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format: HttpRulePostTargetFormatEnum;

  @Metadata({ data: "json, name=headers", elemType: shared.HttpRulePostTargetHeaders })
  headers?: HttpRulePostTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class HttpRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: HttpRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: HttpRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: HttpRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: HttpRulePostTarget;
}
