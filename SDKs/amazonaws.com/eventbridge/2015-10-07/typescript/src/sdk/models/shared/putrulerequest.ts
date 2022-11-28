import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleStateEnum } from "./rulestateenum";
import { Tag } from "./tag";



export class PutRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=EventPattern" })
  eventPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: RuleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
