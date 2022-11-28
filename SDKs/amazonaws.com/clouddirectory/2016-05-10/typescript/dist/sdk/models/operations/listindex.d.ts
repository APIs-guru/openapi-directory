import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIndexQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListIndexXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListIndexXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListIndexRequestBodyIndexReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListIndexRequestBody extends SpeakeasyBase {
    indexReference: ListIndexRequestBodyIndexReference;
    maxResults?: number;
    nextToken?: string;
    rangesOnIndexedValues?: shared.ObjectAttributeRange[];
}
export declare class ListIndexRequest extends SpeakeasyBase {
    queryParams: ListIndexQueryParams;
    headers: ListIndexHeaders;
    request: ListIndexRequestBody;
}
export declare class ListIndexResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listIndexResponse?: shared.ListIndexResponse;
    notIndexException?: shared.NotIndexException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
