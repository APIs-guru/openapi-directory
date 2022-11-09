import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AmqpRuleResponseRequestModeEnum {
    Single = "single"
}

export enum AmqpRuleResponseRuleTypeEnum {
    Amqp = "amqp"
}

export enum AmqpRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AmqpRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.AmqpRuleResponseTargetHeaders })
  headers?: AmqpRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=queueId" })
  queueId: string;
}


export class AmqpRuleResponse extends SpeakeasyBase {
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
  requestMode: AmqpRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AmqpRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AmqpRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AmqpRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
