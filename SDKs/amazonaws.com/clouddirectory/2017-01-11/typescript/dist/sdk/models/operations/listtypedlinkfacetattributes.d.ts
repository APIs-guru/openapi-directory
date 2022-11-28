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
    accessDeniedException?: any;
    contentType: string;
    facetNotFoundException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listTypedLinkFacetAttributesResponse?: shared.ListTypedLinkFacetAttributesResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
