import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";

export enum UnsupportedRuleResponseRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum UnsupportedRuleResponseRuleTypeEnum {
    Unsupported = "unsupported"
}

export enum UnsupportedRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class UnsupportedRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url: string;
}


export class UnsupportedRuleResponse extends SpeakeasyBase {
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
  requestMode: UnsupportedRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: UnsupportedRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: UnsupportedRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: UnsupportedRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
