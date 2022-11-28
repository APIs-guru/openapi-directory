import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTypedLinkFacetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class DeleteTypedLinkFacetRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class DeleteTypedLinkFacetRequest extends SpeakeasyBase {
    headers: DeleteTypedLinkFacetHeaders;
    request: DeleteTypedLinkFacetRequestBody;
}
export declare class DeleteTypedLinkFacetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteTypedLinkFacetResponse?: Map<string, any>;
    facetNotFoundException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
