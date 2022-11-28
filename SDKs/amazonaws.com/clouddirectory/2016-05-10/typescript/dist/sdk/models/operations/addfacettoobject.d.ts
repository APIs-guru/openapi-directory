import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFacetToObjectHeaders extends SpeakeasyBase {
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
export declare class AddFacetToObjectRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * A facet.
**/
export declare class AddFacetToObjectRequestBodySchemaFacet extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
export declare class AddFacetToObjectRequestBody extends SpeakeasyBase {
    objectAttributeList?: shared.AttributeKeyAndValue[];
    objectReference: AddFacetToObjectRequestBodyObjectReference;
    schemaFacet: AddFacetToObjectRequestBodySchemaFacet;
}
export declare class AddFacetToObjectRequest extends SpeakeasyBase {
    headers: AddFacetToObjectHeaders;
    request: AddFacetToObjectRequestBody;
}
export declare class AddFacetToObjectResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    addFacetToObjectResponse?: Map<string, any>;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
