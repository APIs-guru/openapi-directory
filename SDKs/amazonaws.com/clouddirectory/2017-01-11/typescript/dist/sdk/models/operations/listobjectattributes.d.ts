import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListObjectAttributesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListObjectAttributesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: ListObjectAttributesXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
/**
 * A facet.
**/
export declare class ListObjectAttributesRequestBodyFacetFilter extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class ListObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectAttributesRequestBody extends SpeakeasyBase {
    facetFilter?: ListObjectAttributesRequestBodyFacetFilter;
    maxResults?: number;
    nextToken?: string;
    objectReference: ListObjectAttributesRequestBodyObjectReference;
}
export declare class ListObjectAttributesRequest extends SpeakeasyBase {
    queryParams: ListObjectAttributesQueryParams;
    headers: ListObjectAttributesHeaders;
    request: ListObjectAttributesRequestBody;
}
export declare class ListObjectAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listObjectAttributesResponse?: shared.ListObjectAttributesResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
