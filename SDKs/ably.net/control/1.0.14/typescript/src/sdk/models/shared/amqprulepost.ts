import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AmqpRulePostRequestModeEnum {
    Single = "single"
}

export enum AmqpRulePostRuleTypeEnum {
    Amqp = "amqp"
}

export enum AmqpRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AmqpRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.AmqpRulePostTargetHeaders })
  headers?: AmqpRulePostTargetHeaders[];

  @Metadata({ data: "json, name=queueId" })
  queueId: string;
}


export class AmqpRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AmqpRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AmqpRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AmqpRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AmqpRulePostTarget;
}
