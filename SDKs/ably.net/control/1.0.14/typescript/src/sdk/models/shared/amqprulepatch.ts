import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AmqpRulePatchRequestModeEnum {
    Single = "single"
}

export enum AmqpRulePatchRuleTypeEnum {
    Amqp = "amqp"
}

export enum AmqpRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AmqpRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AmqpRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.AmqpRulePatchTargetHeaders })
  headers?: AmqpRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=queueId" })
  queueId?: string;
}


export class AmqpRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: AmqpRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: AmqpRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AmqpRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: AmqpRulePatchTarget;
}
