import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AmqpRulePatchRequestModeEnum {
    Single = "single"
}

export enum AmqpRulePatchRuleTypeEnum {
    Amqp = "amqp"
}

export enum AmqpRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AmqpRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpRulePatchTargetHeaders })
  headers?: AmqpRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=queueId" })
  queueId?: string;
}


export class AmqpRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: AmqpRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: AmqpRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AmqpRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AmqpRulePatchTarget;
}
