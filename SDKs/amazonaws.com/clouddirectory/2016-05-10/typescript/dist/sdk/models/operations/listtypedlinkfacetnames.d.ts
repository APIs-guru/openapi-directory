import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTypedLinkFacetNamesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTypedLinkFacetNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class ListTypedLinkFacetNamesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTypedLinkFacetNamesRequest extends SpeakeasyBase {
    queryParams: ListTypedLinkFacetNamesQueryParams;
    headers: ListTypedLinkFacetNamesHeaders;
    request: ListTypedLinkFacetNamesRequestBody;
}
export declare class ListTypedLinkFacetNamesResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listTypedLinkFacetNamesResponse?: shared.ListTypedLinkFacetNamesResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
