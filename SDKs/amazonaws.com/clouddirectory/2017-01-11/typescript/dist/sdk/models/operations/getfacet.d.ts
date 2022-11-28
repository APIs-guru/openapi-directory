import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFacetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class GetFacetRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class GetFacetRequest extends SpeakeasyBase {
    headers: GetFacetHeaders;
    request: GetFacetRequestBody;
}
export declare class GetFacetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    facetNotFoundException?: any;
    getFacetResponse?: shared.GetFacetResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
