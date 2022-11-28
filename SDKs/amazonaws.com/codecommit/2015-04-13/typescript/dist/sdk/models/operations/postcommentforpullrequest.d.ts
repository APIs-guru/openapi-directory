import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostCommentForPullRequestXAmzTargetEnum {
    CodeCommit20150413PostCommentForPullRequest = "CodeCommit_20150413.PostCommentForPullRequest"
}
export declare class PostCommentForPullRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PostCommentForPullRequestXAmzTargetEnum;
}
export declare class PostCommentForPullRequestRequest extends SpeakeasyBase {
    headers: PostCommentForPullRequestHeaders;
    request: shared.PostCommentForPullRequestInput;
}
export declare class PostCommentForPullRequestResponse extends SpeakeasyBase {
    beforeCommitIdAndAfterCommitIdAreSameException?: any;
    clientRequestTokenRequiredException?: any;
    commentContentRequiredException?: any;
    commentContentSizeLimitExceededException?: any;
    commitDoesNotExistException?: any;
    commitIdRequiredException?: any;
    contentType: string;
    encryptionIntegrityChecksFailedException?: any;
    encryptionKeyAccessDeniedException?: any;
    encryptionKeyDisabledException?: any;
    encryptionKeyNotFoundException?: any;
    encryptionKeyUnavailableException?: any;
    idempotencyParameterMismatchException?: any;
    invalidClientRequestTokenException?: any;
    invalidCommitIdException?: any;
    invalidFileLocationException?: any;
    invalidFilePositionException?: any;
    invalidPathException?: any;
    invalidPullRequestIdException?: any;
    invalidRelativeFileVersionEnumException?: any;
    invalidRepositoryNameException?: any;
    pathDoesNotExistException?: any;
    pathRequiredException?: any;
    postCommentForPullRequestOutput?: shared.PostCommentForPullRequestOutput;
    pullRequestDoesNotExistException?: any;
    pullRequestIdRequiredException?: any;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    repositoryNotAssociatedWithPullRequestException?: any;
    statusCode: number;
}
