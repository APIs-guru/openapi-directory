import { SpeakeasyBase } from "../../../internal/utils";
import { ActionThreshold } from "./actionthreshold";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { Subscriber } from "./subscriber";
export declare class UpdateBudgetActionRequest extends SpeakeasyBase {
    accountId: string;
    actionId: string;
    actionThreshold?: ActionThreshold;
    approvalModel?: ApprovalModelEnum;
    budgetName: string;
    definition?: Definition;
    executionRoleArn?: string;
    notificationType?: NotificationTypeEnum;
    subscribers?: Subscriber[];
}
