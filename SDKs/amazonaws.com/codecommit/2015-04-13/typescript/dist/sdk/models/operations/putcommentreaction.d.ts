import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutCommentReactionXAmzTargetEnum {
    CodeCommit20150413PutCommentReaction = "CodeCommit_20150413.PutCommentReaction"
}
export declare class PutCommentReactionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutCommentReactionXAmzTargetEnum;
}
export declare class PutCommentReactionRequest extends SpeakeasyBase {
    headers: PutCommentReactionHeaders;
    request: shared.PutCommentReactionInput;
}
export declare class PutCommentReactionResponse extends SpeakeasyBase {
    commentDeletedException?: any;
    commentDoesNotExistException?: any;
    commentIdRequiredException?: any;
    contentType: string;
    invalidCommentIdException?: any;
    invalidReactionValueException?: any;
    reactionLimitExceededException?: any;
    reactionValueRequiredException?: any;
    statusCode: number;
}
