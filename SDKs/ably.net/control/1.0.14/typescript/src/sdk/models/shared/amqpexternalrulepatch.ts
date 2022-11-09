import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AmqpExternalRulePatchRequestModeEnum {
    Single = "single"
}

export enum AmqpExternalRulePatchRuleTypeEnum {
    AmqpExternal = "amqp/external"
}

export enum AmqpExternalRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AmqpExternalRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpExternalRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.AmqpExternalRulePatchTargetHeaders })
  headers?: AmqpExternalRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=mandatoryRoute" })
  mandatoryRoute?: boolean;

  @Metadata({ data: "json, name=messageTtl" })
  messageTtl?: number;

  @Metadata({ data: "json, name=persistentMessages" })
  persistentMessages?: boolean;

  @Metadata({ data: "json, name=routingKey" })
  routingKey?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class AmqpExternalRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: AmqpExternalRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: AmqpExternalRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AmqpExternalRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: AmqpExternalRulePatchTarget;
}
