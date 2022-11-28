import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCommentContentXAmzTargetEnum {
    CodeCommit20150413DeleteCommentContent = "CodeCommit_20150413.DeleteCommentContent"
}
export declare class DeleteCommentContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCommentContentXAmzTargetEnum;
}
export declare class DeleteCommentContentRequest extends SpeakeasyBase {
    headers: DeleteCommentContentHeaders;
    request: shared.DeleteCommentContentInput;
}
export declare class DeleteCommentContentResponse extends SpeakeasyBase {
    commentDeletedException?: any;
    commentDoesNotExistException?: any;
    commentIdRequiredException?: any;
    contentType: string;
    deleteCommentContentOutput?: shared.DeleteCommentContentOutput;
    invalidCommentIdException?: any;
    statusCode: number;
}
