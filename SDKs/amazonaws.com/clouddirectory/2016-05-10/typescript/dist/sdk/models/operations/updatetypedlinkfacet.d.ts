import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTypedLinkFacetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class UpdateTypedLinkFacetRequestBody extends SpeakeasyBase {
    attributeUpdates: shared.TypedLinkFacetAttributeUpdate[];
    identityAttributeOrder: string[];
    name: string;
}
export declare class UpdateTypedLinkFacetRequest extends SpeakeasyBase {
    headers: UpdateTypedLinkFacetHeaders;
    request: UpdateTypedLinkFacetRequestBody;
}
export declare class UpdateTypedLinkFacetResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    facetNotFoundException?: shared.FacetNotFoundException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidFacetUpdateException?: shared.InvalidFacetUpdateException;
    invalidRuleException?: shared.InvalidRuleException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    updateTypedLinkFacetResponse?: Map<string, any>;
    validationException?: shared.ValidationException;
}
