import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDisabledReasonEnum } from "./memberdisabledreasonenum";
import { MemberStatusEnum } from "./memberstatusenum";
/**
 * Details about a member account that was invited to contribute to a behavior graph.
**/
export declare class MemberDetail extends SpeakeasyBase {
    accountId?: string;
    administratorId?: string;
    disabledReason?: MemberDisabledReasonEnum;
    emailAddress?: string;
    graphArn?: string;
    invitedTime?: Date;
    masterId?: string;
    percentOfGraphUtilization?: number;
    percentOfGraphUtilizationUpdatedTime?: Date;
    status?: MemberStatusEnum;
    updatedTime?: Date;
    volumeUsageInBytes?: number;
    volumeUsageUpdatedTime?: Date;
}
