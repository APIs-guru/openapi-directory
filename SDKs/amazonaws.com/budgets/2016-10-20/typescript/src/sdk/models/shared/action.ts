import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ActionId" })
  actionId: string;

  @Metadata({ data: "json, name=ActionThreshold" })
  actionThreshold: ActionThreshold;

  @Metadata({ data: "json, name=ActionType" })
  actionType: ActionTypeEnum;

  @Metadata({ data: "json, name=ApprovalModel" })
  approvalModel: ApprovalModelEnum;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=Definition" })
  definition: Definition;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=NotificationType" })
  notificationType: NotificationTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status: ActionStatusEnum;

  @Metadata({ data: "json, name=Subscribers", elemType: shared.Subscriber })
  subscribers: Subscriber[];
}
