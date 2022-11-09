import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
export declare class GetEnrollmentStatusResponse extends SpeakeasyBase {
    lastUpdatedTimestamp?: Date;
    memberAccountsEnrolled?: boolean;
    numberOfMemberAccountsOptedIn?: number;
    status?: StatusEnum;
    statusReason?: string;
}
