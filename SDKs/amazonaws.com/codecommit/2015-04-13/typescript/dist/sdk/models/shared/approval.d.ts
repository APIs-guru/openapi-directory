import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalStateEnum } from "./approvalstateenum";
/**
 * Returns information about a specific approval on a pull request.
**/
export declare class Approval extends SpeakeasyBase {
    approvalState?: ApprovalStateEnum;
    userArn?: string;
}
