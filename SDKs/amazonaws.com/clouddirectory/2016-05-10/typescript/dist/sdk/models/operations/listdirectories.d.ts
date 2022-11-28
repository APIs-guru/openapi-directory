import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDirectoriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDirectoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListDirectoriesRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}
export declare class ListDirectoriesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    state?: ListDirectoriesRequestBodyStateEnum;
}
export declare class ListDirectoriesRequest extends SpeakeasyBase {
    queryParams: ListDirectoriesQueryParams;
    headers: ListDirectoriesHeaders;
    request: ListDirectoriesRequestBody;
}
export declare class ListDirectoriesResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listDirectoriesResponse?: shared.ListDirectoriesResponse;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
