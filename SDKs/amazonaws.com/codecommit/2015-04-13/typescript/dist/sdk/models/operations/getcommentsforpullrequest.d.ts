import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentsForPullRequestQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetCommentsForPullRequestXAmzTargetEnum {
    CodeCommit20150413GetCommentsForPullRequest = "CodeCommit_20150413.GetCommentsForPullRequest"
}
export declare class GetCommentsForPullRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentsForPullRequestXAmzTargetEnum;
}
export declare class GetCommentsForPullRequestRequest extends SpeakeasyBase {
    queryParams: GetCommentsForPullRequestQueryParams;
    headers: GetCommentsForPullRequestHeaders;
    request: shared.GetCommentsForPullRequestInput;
}
export declare class GetCommentsForPullRequestResponse extends SpeakeasyBase {
    commitDoesNotExistException?: any;
    commitIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    getCommentsForPullRequestOutput?: shared.GetCommentsForPullRequestOutput;
    invalidCommitIdException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidPullRequestIdException?: any;
    invalidRepositoryNameException?: any;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    repositoryNotAssociatedWithPullRequestException?: any;
    statusCode: number;
}
