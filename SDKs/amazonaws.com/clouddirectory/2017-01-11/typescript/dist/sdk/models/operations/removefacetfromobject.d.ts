import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveFacetFromObjectHeaders extends SpeakeasyBase {
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
export declare class RemoveFacetFromObjectRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * A facet.
**/
export declare class RemoveFacetFromObjectRequestBodySchemaFacet extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
export declare class RemoveFacetFromObjectRequestBody extends SpeakeasyBase {
    objectReference: RemoveFacetFromObjectRequestBodyObjectReference;
    schemaFacet: RemoveFacetFromObjectRequestBodySchemaFacet;
}
export declare class RemoveFacetFromObjectRequest extends SpeakeasyBase {
    headers: RemoveFacetFromObjectHeaders;
    request: RemoveFacetFromObjectRequestBody;
}
export declare class RemoveFacetFromObjectResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    removeFacetFromObjectResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
