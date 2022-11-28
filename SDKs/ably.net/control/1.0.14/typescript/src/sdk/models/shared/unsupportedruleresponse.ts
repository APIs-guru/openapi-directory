import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum UnsupportedRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum UnsupportedRuleResponseRuleTypeEnum {
    Unsupported = "unsupported"
}

export enum UnsupportedRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class UnsupportedRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class UnsupportedRuleResponse extends SpeakeasyBase {
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
  requestMode: UnsupportedRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: UnsupportedRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UnsupportedRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: UnsupportedRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
