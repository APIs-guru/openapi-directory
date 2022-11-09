import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";

export enum IftttRuleResponseRequestModeEnum {
    Single = "single"
}

export enum IftttRuleResponseRuleTypeEnum {
    HttpIfttt = "http/ifttt"
}

export enum IftttRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class IftttRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventName" })
  eventName: string;

  @Metadata({ data: "json, name=webhookKey" })
  webhookKey: string;
}


export class IftttRuleResponse extends SpeakeasyBase {
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
  requestMode: IftttRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: IftttRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: IftttRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: IftttRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
