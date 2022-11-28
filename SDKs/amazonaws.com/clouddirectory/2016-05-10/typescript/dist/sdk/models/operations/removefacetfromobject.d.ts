import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
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
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    removeFacetFromObjectResponse?: Map<string, any>;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
