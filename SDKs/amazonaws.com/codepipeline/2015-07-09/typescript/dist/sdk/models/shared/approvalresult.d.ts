import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStatusEnum } from "./approvalstatusenum";
/**
 * Represents information about the result of an approval request.
**/
export declare class ApprovalResult extends SpeakeasyBase {
    status: ApprovalStatusEnum;
    summary: string;
}
