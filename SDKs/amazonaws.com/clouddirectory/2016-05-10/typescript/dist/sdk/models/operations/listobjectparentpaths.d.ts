import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListObjectParentPathsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListObjectParentPathsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListObjectParentPathsRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectParentPathsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ListObjectParentPathsRequestBodyObjectReference;
}
export declare class ListObjectParentPathsRequest extends SpeakeasyBase {
    queryParams: ListObjectParentPathsQueryParams;
    headers: ListObjectParentPathsHeaders;
    request: ListObjectParentPathsRequestBody;
}
export declare class ListObjectParentPathsResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listObjectParentPathsResponse?: shared.ListObjectParentPathsResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
