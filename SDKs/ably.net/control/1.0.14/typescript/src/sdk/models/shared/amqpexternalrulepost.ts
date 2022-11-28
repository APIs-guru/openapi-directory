import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AmqpExternalRulePostRequestModeEnum {
    Single = "single"
}

export enum AmqpExternalRulePostRuleTypeEnum {
    AmqpExternal = "amqp/external"
}


export class AmqpExternalRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpExternalRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpExternalRulePostTargetHeaders })
  headers?: AmqpExternalRulePostTargetHeaders[];

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


export class AmqpExternalRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AmqpExternalRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AmqpExternalRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AmqpExternalRulePostTarget;
}
