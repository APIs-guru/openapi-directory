import { SpeakeasyBase } from "../../../internal/utils";
import { ActionThreshold } from "./actionthreshold";
import { ActionTypeEnum } from "./actiontypeenum";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { Subscriber } from "./subscriber";
export declare class CreateBudgetActionRequest extends SpeakeasyBase {
    accountId: string;
    actionThreshold: ActionThreshold;
    actionType: ActionTypeEnum;
    approvalModel: ApprovalModelEnum;
    budgetName: string;
    definition: Definition;
    executionRoleArn: string;
    notificationType: NotificationTypeEnum;
    subscribers: Subscriber[];
}
