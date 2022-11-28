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
    accessDeniedException?: any;
    contentType: string;
    facetNotFoundException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidFacetUpdateException?: any;
    invalidRuleException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    updateTypedLinkFacetResponse?: Map<string, any>;
    validationException?: any;
}
