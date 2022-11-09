import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";

export enum IftttRulePostRequestModeEnum {
    Single = "single"
}

export enum IftttRulePostRuleTypeEnum {
    HttpIfttt = "http/ifttt"
}

export enum IftttRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class IftttRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventName" })
  eventName: string;

  @Metadata({ data: "json, name=webhookKey" })
  webhookKey: string;
}


export class IftttRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: IftttRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: IftttRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: IftttRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: IftttRulePostTarget;
}
