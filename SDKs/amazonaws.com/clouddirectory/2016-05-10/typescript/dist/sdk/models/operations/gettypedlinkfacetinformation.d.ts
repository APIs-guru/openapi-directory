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
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    facetNotFoundException?: shared.FacetNotFoundException;
    getTypedLinkFacetInformationResponse?: shared.GetTypedLinkFacetInformationResponse;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
