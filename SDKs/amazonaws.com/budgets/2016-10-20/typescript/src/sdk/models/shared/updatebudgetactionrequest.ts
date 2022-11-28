import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionThreshold } from "./actionthreshold";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { Subscriber } from "./subscriber";



export class UpdateBudgetActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ActionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=ActionThreshold" })
  actionThreshold?: ActionThreshold;

  @SpeakeasyMetadata({ data: "json, name=ApprovalModel" })
  approvalModel?: ApprovalModelEnum;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: Definition;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationType" })
  notificationType?: NotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Subscribers", elemType: Subscriber })
  subscribers?: Subscriber[];
}
