import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStateEnum } from "./approvalstateenum";
/**
 * Returns information about a change in the approval state for a pull request.
**/
export declare class ApprovalStateChangedEventMetadata extends SpeakeasyBase {
    approvalStatus?: ApprovalStateEnum;
    revisionId?: string;
}
