import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostCommentForComparedCommitXAmzTargetEnum {
    CodeCommit20150413PostCommentForComparedCommit = "CodeCommit_20150413.PostCommentForComparedCommit"
}
export declare class PostCommentForComparedCommitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PostCommentForComparedCommitXAmzTargetEnum;
}
export declare class PostCommentForComparedCommitRequest extends SpeakeasyBase {
    headers: PostCommentForComparedCommitHeaders;
    request: shared.PostCommentForComparedCommitInput;
}
export declare class PostCommentForComparedCommitResponse extends SpeakeasyBase {
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
    invalidRelativeFileVersionEnumException?: any;
    invalidRepositoryNameException?: any;
    pathDoesNotExistException?: any;
    pathRequiredException?: any;
    postCommentForComparedCommitOutput?: shared.PostCommentForComparedCommitOutput;
    repositoryDoesNotExistException?: any;
    repositoryNameRequiredException?: any;
    statusCode: number;
}
