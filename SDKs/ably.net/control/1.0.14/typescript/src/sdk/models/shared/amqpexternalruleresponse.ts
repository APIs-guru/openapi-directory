import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AmqpExternalRuleResponseRequestModeEnum {
    Single = "single"
}

export enum AmqpExternalRuleResponseRuleTypeEnum {
    AmqpExternal = "amqp/external"
}

export enum AmqpExternalRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AmqpExternalRuleResponseTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpExternalRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpExternalRuleResponseTargetHeaders })
  headers?: AmqpExternalRuleResponseTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=mandatoryRoute" })
  mandatoryRoute: boolean;

  @SpeakeasyMetadata({ data: "json, name=messageTtl" })
  messageTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=persistentMessages" })
  persistentMessages: boolean;

  @SpeakeasyMetadata({ data: "json, name=routingKey" })
  routingKey: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class AmqpExternalRuleResponse extends SpeakeasyBase {
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
  requestMode: AmqpExternalRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AmqpExternalRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AmqpExternalRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AmqpExternalRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
