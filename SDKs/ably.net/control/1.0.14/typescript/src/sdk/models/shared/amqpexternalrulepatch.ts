import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AmqpExternalRulePatchRequestModeEnum {
    Single = "single"
}

export enum AmqpExternalRulePatchRuleTypeEnum {
    AmqpExternal = "amqp/external"
}

export enum AmqpExternalRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AmqpExternalRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpExternalRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpExternalRulePatchTargetHeaders })
  headers?: AmqpExternalRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=mandatoryRoute" })
  mandatoryRoute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageTtl" })
  messageTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=persistentMessages" })
  persistentMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=routingKey" })
  routingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class AmqpExternalRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: AmqpExternalRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: AmqpExternalRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AmqpExternalRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AmqpExternalRulePatchTarget;
}
