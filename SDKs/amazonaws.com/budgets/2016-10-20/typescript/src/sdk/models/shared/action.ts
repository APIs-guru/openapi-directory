import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionThreshold } from "./actionthreshold";
import { ActionTypeEnum } from "./actiontypeenum";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { ActionStatusEnum } from "./actionstatusenum";
import { Subscriber } from "./subscriber";



// Action
/** 
 *  A budget action resource. 
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=ActionThreshold" })
  actionThreshold: ActionThreshold;

  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType: ActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ApprovalModel" })
  approvalModel: ApprovalModelEnum;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition: Definition;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationType" })
  notificationType: NotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ActionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Subscribers", elemType: Subscriber })
  subscribers: Subscriber[];
}
