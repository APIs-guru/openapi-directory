import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStateEnum } from "./approvalstateenum";
export declare class UpdatePullRequestApprovalStateInput extends SpeakeasyBase {
    approvalState: ApprovalStateEnum;
    pullRequestId: string;
    revisionId: string;
}
