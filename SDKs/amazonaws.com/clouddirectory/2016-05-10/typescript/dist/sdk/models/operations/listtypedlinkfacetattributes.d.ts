import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTypedLinkFacetAttributesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTypedLinkFacetAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class ListTypedLinkFacetAttributesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    name: string;
    nextToken?: string;
}
export declare class ListTypedLinkFacetAttributesRequest extends SpeakeasyBase {
    queryParams: ListTypedLinkFacetAttributesQueryParams;
    headers: ListTypedLinkFacetAttributesHeaders;
    request: ListTypedLinkFacetAttributesRequestBody;
}
export declare class ListTypedLinkFacetAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    facetNotFoundException?: shared.FacetNotFoundException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listTypedLinkFacetAttributesResponse?: shared.ListTypedLinkFacetAttributesResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
