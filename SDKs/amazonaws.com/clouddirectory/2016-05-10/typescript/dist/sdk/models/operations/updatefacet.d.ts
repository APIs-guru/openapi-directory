import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFacetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare enum UpdateFacetRequestBodyObjectTypeEnum {
    Node = "NODE",
    LeafNode = "LEAF_NODE",
    Policy = "POLICY",
    Index = "INDEX"
}
export declare class UpdateFacetRequestBody extends SpeakeasyBase {
    attributeUpdates?: shared.FacetAttributeUpdate[];
    name: string;
    objectType?: UpdateFacetRequestBodyObjectTypeEnum;
}
export declare class UpdateFacetRequest extends SpeakeasyBase {
    headers: UpdateFacetHeaders;
    request: UpdateFacetRequestBody;
}
export declare class UpdateFacetResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    facetNotFoundException?: shared.FacetNotFoundException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidFacetUpdateException?: shared.InvalidFacetUpdateException;
    invalidRuleException?: shared.InvalidRuleException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    updateFacetResponse?: Map<string, any>;
    validationException?: shared.ValidationException;
}
