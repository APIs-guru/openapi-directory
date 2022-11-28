import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFacetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class DeleteFacetRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class DeleteFacetRequest extends SpeakeasyBase {
    headers: DeleteFacetHeaders;
    request: DeleteFacetRequestBody;
}
export declare class DeleteFacetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteFacetResponse?: Map<string, any>;
    facetInUseException?: any;
    facetNotFoundException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
