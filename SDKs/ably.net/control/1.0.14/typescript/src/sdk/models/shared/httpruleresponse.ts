import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum HttpRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum HttpRuleResponseRuleTypeEnum {
    Http = "http"
}

export enum HttpRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum HttpRuleResponseTargetFormatEnum {
    Json = "json",
    Msgpack = "msgpack"
}


export class HttpRuleResponseTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class HttpRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: HttpRuleResponseTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpRuleResponseTargetHeaders })
  headers?: HttpRuleResponseTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class HttpRuleResponse extends SpeakeasyBase {
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
  requestMode: HttpRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: HttpRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HttpRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: HttpRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
