import { SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";
import { DelegationStatusEnum } from "./delegationstatusenum";
/**
 *  The assignment of a control set to a delegate for review.
**/
export declare class Delegation extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    comment?: string;
    controlSetId?: string;
    createdBy?: string;
    creationTime?: Date;
    id?: string;
    lastUpdated?: Date;
    roleArn?: string;
    roleType?: RoleTypeEnum;
    status?: DelegationStatusEnum;
}
