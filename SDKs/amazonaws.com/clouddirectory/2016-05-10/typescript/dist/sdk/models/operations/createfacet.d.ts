import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFacetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare enum CreateFacetRequestBodyObjectTypeEnum {
    Node = "NODE",
    LeafNode = "LEAF_NODE",
    Policy = "POLICY",
    Index = "INDEX"
}
export declare class CreateFacetRequestBody extends SpeakeasyBase {
    attributes?: shared.FacetAttribute[];
    name: string;
    objectType: CreateFacetRequestBodyObjectTypeEnum;
}
export declare class CreateFacetRequest extends SpeakeasyBase {
    headers: CreateFacetHeaders;
    request: CreateFacetRequestBody;
}
export declare class CreateFacetResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    createFacetResponse?: Map<string, any>;
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
