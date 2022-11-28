import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum HttpRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum HttpRulePatchRuleTypeEnum {
    Http = "http"
}

export enum HttpRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum HttpRulePatchTargetFormatEnum {
    Json = "json",
    Msgpack = "msgpack"
}


export class HttpRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class HttpRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: HttpRulePatchTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpRulePatchTargetHeaders })
  headers?: HttpRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class HttpRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: HttpRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: HttpRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HttpRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: HttpRulePatchTarget;
}
