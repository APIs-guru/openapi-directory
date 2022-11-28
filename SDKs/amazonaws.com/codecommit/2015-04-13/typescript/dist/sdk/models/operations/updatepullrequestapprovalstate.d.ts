import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePullRequestApprovalStateXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalState = "CodeCommit_20150413.UpdatePullRequestApprovalState"
}
export declare class UpdatePullRequestApprovalStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestApprovalStateXAmzTargetEnum;
}
export declare class UpdatePullRequestApprovalStateRequest extends SpeakeasyBase {
    headers: UpdatePullRequestApprovalStateHeaders;
    request: shared.UpdatePullRequestApprovalStateInput;
}
export declare class UpdatePullRequestApprovalStateResponse extends SpeakeasyBase {
    approvalStateRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidApprovalStateException?: any;
    invalidPullRequestIdException?: any;
    invalidRevisionIdException?: any;
    maximumNumberOfApprovalsExceededException?: any;
    pullRequestAlreadyClosedException?: any;
    pullRequestCannotBeApprovedByAuthorException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    revisionIdRequiredException?: any;
    revisionNotCurrentException?: any;
    statusCode: number;
}
