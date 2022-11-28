import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFacetNamesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFacetNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class ListFacetNamesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFacetNamesRequest extends SpeakeasyBase {
    queryParams: ListFacetNamesQueryParams;
    headers: ListFacetNamesHeaders;
    request: ListFacetNamesRequestBody;
}
export declare class ListFacetNamesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listFacetNamesResponse?: shared.ListFacetNamesResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
