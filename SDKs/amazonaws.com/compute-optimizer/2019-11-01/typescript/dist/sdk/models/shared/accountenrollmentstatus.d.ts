import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
/**
 * Describes the enrollment status of an organization's member accounts in Compute Optimizer.
**/
export declare class AccountEnrollmentStatus extends SpeakeasyBase {
    accountId?: string;
    lastUpdatedTimestamp?: Date;
    status?: StatusEnum;
    statusReason?: string;
}
