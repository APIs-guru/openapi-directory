import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
export declare class UpdateEnrollmentStatusRequest extends SpeakeasyBase {
    includeMemberAccounts?: boolean;
    status: StatusEnum;
}
