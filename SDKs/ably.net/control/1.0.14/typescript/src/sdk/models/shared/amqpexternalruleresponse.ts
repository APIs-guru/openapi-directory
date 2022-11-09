import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AmqpExternalRuleResponseRequestModeEnum {
    Single = "single"
}

export enum AmqpExternalRuleResponseRuleTypeEnum {
    AmqpExternal = "amqp/external"
}

export enum AmqpExternalRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AmqpExternalRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpExternalRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.AmqpExternalRuleResponseTargetHeaders })
  headers?: AmqpExternalRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=mandatoryRoute" })
  mandatoryRoute: boolean;

  @Metadata({ data: "json, name=messageTtl" })
  messageTtl?: number;

  @Metadata({ data: "json, name=persistentMessages" })
  persistentMessages: boolean;

  @Metadata({ data: "json, name=routingKey" })
  routingKey: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class AmqpExternalRuleResponse extends SpeakeasyBase {
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
  requestMode: AmqpExternalRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AmqpExternalRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AmqpExternalRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AmqpExternalRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
