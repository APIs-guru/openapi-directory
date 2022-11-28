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
export declare enum CreateFacetRequestBodyFacetStyleEnum {
    Static = "STATIC",
    Dynamic = "DYNAMIC"
}
export declare enum CreateFacetRequestBodyObjectTypeEnum {
    Node = "NODE",
    LeafNode = "LEAF_NODE",
    Policy = "POLICY",
    Index = "INDEX"
}
export declare class CreateFacetRequestBody extends SpeakeasyBase {
    attributes?: shared.FacetAttribute[];
    facetStyle?: CreateFacetRequestBodyFacetStyleEnum;
    name: string;
    objectType?: CreateFacetRequestBodyObjectTypeEnum;
}
export declare class CreateFacetRequest extends SpeakeasyBase {
    headers: CreateFacetHeaders;
    request: CreateFacetRequestBody;
}
export declare class CreateFacetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createFacetResponse?: Map<string, any>;
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
