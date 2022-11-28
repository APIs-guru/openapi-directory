import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTypedLinkFacetInformationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class GetTypedLinkFacetInformationRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class GetTypedLinkFacetInformationRequest extends SpeakeasyBase {
    headers: GetTypedLinkFacetInformationHeaders;
    request: GetTypedLinkFacetInformationRequestBody;
}
export declare class GetTypedLinkFacetInformationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    facetNotFoundException?: any;
    getTypedLinkFacetInformationResponse?: shared.GetTypedLinkFacetInformationResponse;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
