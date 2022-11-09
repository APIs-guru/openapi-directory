import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum HttpRuleResponseRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum HttpRuleResponseRuleTypeEnum {
    Http = "http"
}

export enum HttpRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum HttpRuleResponseTargetFormatEnum {
    Json = "json"
,    Msgpack = "msgpack"
}


export class HttpRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class HttpRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format: HttpRuleResponseTargetFormatEnum;

  @Metadata({ data: "json, name=headers", elemType: shared.HttpRuleResponseTargetHeaders })
  headers?: HttpRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class HttpRuleResponse extends SpeakeasyBase {
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
  requestMode: HttpRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: HttpRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: HttpRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: HttpRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
