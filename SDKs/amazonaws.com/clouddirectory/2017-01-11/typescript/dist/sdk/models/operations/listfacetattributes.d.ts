import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFacetAttributesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFacetAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class ListFacetAttributesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    name: string;
    nextToken?: string;
}
export declare class ListFacetAttributesRequest extends SpeakeasyBase {
    queryParams: ListFacetAttributesQueryParams;
    headers: ListFacetAttributesHeaders;
    request: ListFacetAttributesRequestBody;
}
export declare class ListFacetAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    facetNotFoundException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listFacetAttributesResponse?: shared.ListFacetAttributesResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
