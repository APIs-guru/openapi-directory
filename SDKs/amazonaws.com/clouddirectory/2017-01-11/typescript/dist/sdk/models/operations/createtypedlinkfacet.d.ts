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
    accessDeniedException?: any;
    contentType: string;
    createTypedLinkFacetResponse?: Map<string, any>;
    facetAlreadyExistsException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidRuleException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
