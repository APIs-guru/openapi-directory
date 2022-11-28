import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentReactionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetCommentReactionsXAmzTargetEnum {
    CodeCommit20150413GetCommentReactions = "CodeCommit_20150413.GetCommentReactions"
}
export declare class GetCommentReactionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentReactionsXAmzTargetEnum;
}
export declare class GetCommentReactionsRequest extends SpeakeasyBase {
    queryParams: GetCommentReactionsQueryParams;
    headers: GetCommentReactionsHeaders;
    request: shared.GetCommentReactionsInput;
}
export declare class GetCommentReactionsResponse extends SpeakeasyBase {
    commentDeletedException?: any;
    commentDoesNotExistException?: any;
    commentIdRequiredException?: any;
    contentType: string;
    getCommentReactionsOutput?: shared.GetCommentReactionsOutput;
    invalidCommentIdException?: any;
    invalidContinuationTokenException?: any;
    invalidMaxResultsException?: any;
    invalidReactionUserArnException?: any;
    statusCode: number;
}
