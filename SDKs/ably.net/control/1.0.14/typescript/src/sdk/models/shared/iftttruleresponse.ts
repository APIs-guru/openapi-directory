import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum IftttRuleResponseRequestModeEnum {
    Single = "single"
}

export enum IftttRuleResponseRuleTypeEnum {
    HttpIfttt = "http/ifttt"
}

export enum IftttRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class IftttRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=webhookKey" })
  webhookKey: string;
}


export class IftttRuleResponse extends SpeakeasyBase {
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
  requestMode: IftttRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: IftttRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: IftttRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: IftttRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
