import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AmqpExternalRulePostRequestModeEnum {
    Single = "single"
}

export enum AmqpExternalRulePostRuleTypeEnum {
    AmqpExternal = "amqp/external"
}


export class AmqpExternalRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpExternalRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.AmqpExternalRulePostTargetHeaders })
  headers?: AmqpExternalRulePostTargetHeaders[];

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


export class AmqpExternalRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AmqpExternalRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AmqpExternalRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=target" })
  target: AmqpExternalRulePostTarget;
}
