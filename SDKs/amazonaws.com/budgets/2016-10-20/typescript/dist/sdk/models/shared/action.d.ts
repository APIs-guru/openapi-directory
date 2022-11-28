import { SpeakeasyBase } from "../../../internal/utils";
import { ActionThreshold } from "./actionthreshold";
import { ActionTypeEnum } from "./actiontypeenum";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { ActionStatusEnum } from "./actionstatusenum";
import { Subscriber } from "./subscriber";
/**
 *  A budget action resource.
**/
export declare class Action extends SpeakeasyBase {
    actionId: string;
    actionThreshold: ActionThreshold;
    actionType: ActionTypeEnum;
    approvalModel: ApprovalModelEnum;
    budgetName: string;
    definition: Definition;
    executionRoleArn: string;
    notificationType: NotificationTypeEnum;
    status: ActionStatusEnum;
    subscribers: Subscriber[];
}
