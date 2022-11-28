import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCommentXAmzTargetEnum {
    CodeCommit20150413UpdateComment = "CodeCommit_20150413.UpdateComment"
}
export declare class UpdateCommentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCommentXAmzTargetEnum;
}
export declare class UpdateCommentRequest extends SpeakeasyBase {
    headers: UpdateCommentHeaders;
    request: shared.UpdateCommentInput;
}
export declare class UpdateCommentResponse extends SpeakeasyBase {
    commentContentRequiredException?: any;
    commentContentSizeLimitExceededException?: any;
    commentDeletedException?: any;
    commentDoesNotExistException?: any;
    commentIdRequiredException?: any;
    commentNotCreatedByCallerException?: any;
    contentType: string;
    invalidCommentIdException?: any;
    statusCode: number;
    updateCommentOutput?: shared.UpdateCommentOutput;
}
