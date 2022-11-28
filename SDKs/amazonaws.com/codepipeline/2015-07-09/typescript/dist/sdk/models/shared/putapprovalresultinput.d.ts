import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalResult } from "./approvalresult";
/**
 * Represents the input of a <code>PutApprovalResult</code> action.
**/
export declare class PutApprovalResultInput extends SpeakeasyBase {
    actionName: string;
    pipelineName: string;
    result: ApprovalResult;
    stageName: string;
    token: string;
}
