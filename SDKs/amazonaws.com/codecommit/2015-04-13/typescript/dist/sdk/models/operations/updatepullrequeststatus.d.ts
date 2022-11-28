import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePullRequestStatusXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestStatus = "CodeCommit_20150413.UpdatePullRequestStatus"
}
export declare class UpdatePullRequestStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePullRequestStatusXAmzTargetEnum;
}
export declare class UpdatePullRequestStatusRequest extends SpeakeasyBase {
    headers: UpdatePullRequestStatusHeaders;
    request: shared.UpdatePullRequestStatusInput;
}
export declare class UpdatePullRequestStatusResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    invalidPullRequestIdException?: any;
    invalidPullRequestStatusException?: any;
    invalidPullRequestStatusUpdateException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    pullRequestStatusRequiredException?: any;
    statusCode: number;
    updatePullRequestStatusOutput?: shared.UpdatePullRequestStatusOutput;
}
