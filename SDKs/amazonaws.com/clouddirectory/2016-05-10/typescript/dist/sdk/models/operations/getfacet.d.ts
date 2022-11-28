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
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    facetNotFoundException?: shared.FacetNotFoundException;
    getFacetResponse?: shared.GetFacetResponse;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
