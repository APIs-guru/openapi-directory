import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AmqpRulePostRequestModeEnum {
    Single = "single"
}

export enum AmqpRulePostRuleTypeEnum {
    Amqp = "amqp"
}

export enum AmqpRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AmqpRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpRulePostTargetHeaders })
  headers?: AmqpRulePostTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=queueId" })
  queueId: string;
}


export class AmqpRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AmqpRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AmqpRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AmqpRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AmqpRulePostTarget;
}
