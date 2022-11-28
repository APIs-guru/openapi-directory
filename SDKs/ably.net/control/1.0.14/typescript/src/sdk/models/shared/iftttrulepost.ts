import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum IftttRulePostRequestModeEnum {
    Single = "single"
}

export enum IftttRulePostRuleTypeEnum {
    HttpIfttt = "http/ifttt"
}

export enum IftttRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class IftttRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=webhookKey" })
  webhookKey: string;
}


export class IftttRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: IftttRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: IftttRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: IftttRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: IftttRulePostTarget;
}
