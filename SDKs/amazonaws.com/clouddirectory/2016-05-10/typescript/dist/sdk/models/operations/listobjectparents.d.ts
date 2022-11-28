import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListObjectParentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListObjectParentsXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectParentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListObjectParentsXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListObjectParentsRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectParentsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ListObjectParentsRequestBodyObjectReference;
}
export declare class ListObjectParentsRequest extends SpeakeasyBase {
    queryParams: ListObjectParentsQueryParams;
    headers: ListObjectParentsHeaders;
    request: ListObjectParentsRequestBody;
}
export declare class ListObjectParentsResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    cannotListParentOfRootException?: shared.CannotListParentOfRootException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listObjectParentsResponse?: shared.ListObjectParentsResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
