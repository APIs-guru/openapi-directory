import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum HttpRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum HttpRulePostRuleTypeEnum {
    Http = "http"
}

export enum HttpRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum HttpRulePostTargetFormatEnum {
    Json = "json",
    Msgpack = "msgpack"
}


export class HttpRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class HttpRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: HttpRulePostTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpRulePostTargetHeaders })
  headers?: HttpRulePostTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class HttpRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: HttpRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: HttpRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HttpRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: HttpRulePostTarget;
}
