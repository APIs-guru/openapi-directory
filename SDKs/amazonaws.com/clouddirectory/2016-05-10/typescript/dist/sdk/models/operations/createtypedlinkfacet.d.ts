import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTypedLinkFacetHeaders extends SpeakeasyBase {
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
 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
**/
export declare class CreateTypedLinkFacetRequestBodyFacet extends SpeakeasyBase {
    attributes?: shared.TypedLinkAttributeDefinition[];
    identityAttributeOrder?: string[];
    name?: string;
}
export declare class CreateTypedLinkFacetRequestBody extends SpeakeasyBase {
    facet: CreateTypedLinkFacetRequestBodyFacet;
}
export declare class CreateTypedLinkFacetRequest extends SpeakeasyBase {
    headers: CreateTypedLinkFacetHeaders;
    request: CreateTypedLinkFacetRequestBody;
}
export declare class CreateTypedLinkFacetResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    createTypedLinkFacetResponse?: Map<string, any>;
    facetAlreadyExistsException?: shared.FacetAlreadyExistsException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidRuleException?: shared.InvalidRuleException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
