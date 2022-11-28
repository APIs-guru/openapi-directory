import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostCommentReplyXAmzTargetEnum {
    CodeCommit20150413PostCommentReply = "CodeCommit_20150413.PostCommentReply"
}
export declare class PostCommentReplyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PostCommentReplyXAmzTargetEnum;
}
export declare class PostCommentReplyRequest extends SpeakeasyBase {
    headers: PostCommentReplyHeaders;
    request: shared.PostCommentReplyInput;
}
export declare class PostCommentReplyResponse extends SpeakeasyBase {
    clientRequestTokenRequiredException?: any;
    commentContentRequiredException?: any;
    commentContentSizeLimitExceededException?: any;
    commentDoesNotExistException?: any;
    commentIdRequiredException?: any;
    contentType: string;
    idempotencyParameterMismatchException?: any;
    invalidClientRequestTokenException?: any;
    invalidCommentIdException?: any;
    postCommentReplyOutput?: shared.PostCommentReplyOutput;
    statusCode: number;
}
