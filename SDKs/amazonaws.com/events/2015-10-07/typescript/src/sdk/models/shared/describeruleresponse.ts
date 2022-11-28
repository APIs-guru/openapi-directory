import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleStateEnum } from "./rulestateenum";



export class DescribeRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=EventPattern" })
  eventPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=ManagedBy" })
  managedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: RuleStateEnum;
}
