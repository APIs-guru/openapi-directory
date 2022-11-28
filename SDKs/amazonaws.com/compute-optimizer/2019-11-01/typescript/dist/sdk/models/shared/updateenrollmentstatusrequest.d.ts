import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
export declare class UpdateEnrollmentStatusRequest extends SpeakeasyBase {
    includeMemberAccounts?: boolean;
    status: StatusEnum;
}
