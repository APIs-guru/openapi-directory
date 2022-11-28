import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPullRequestApprovalStatesXAmzTargetEnum {
    CodeCommit20150413GetPullRequestApprovalStates = "CodeCommit_20150413.GetPullRequestApprovalStates"
}
export declare class GetPullRequestApprovalStatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPullRequestApprovalStatesXAmzTargetEnum;
}
export declare class GetPullRequestApprovalStatesRequest extends SpeakeasyBase {
    headers: GetPullRequestApprovalStatesHeaders;
    request: shared.GetPullRequestApprovalStatesInput;
}
export declare class GetPullRequestApprovalStatesResponse extends SpeakeasyBase {
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getPullRequestApprovalStatesOutput?: shared.GetPullRequestApprovalStatesOutput;
    invalidPullRequestIdException?: any;
    invalidRevisionIdException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    revisionIdRequiredException?: any;
    statusCode: number;
}
