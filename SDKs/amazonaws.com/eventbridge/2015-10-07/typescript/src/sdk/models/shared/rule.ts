import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleStateEnum } from "./rulestateenum";


// Rule
/** 
 * Contains information about a rule in Amazon EventBridge.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=EventPattern" })
  eventPattern?: string;

  @Metadata({ data: "json, name=ManagedBy" })
  managedBy?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=State" })
  state?: RuleStateEnum;
}
