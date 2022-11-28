import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
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
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    deleteFacetResponse?: Map<string, any>;
    facetInUseException?: shared.FacetInUseException;
    facetNotFoundException?: shared.FacetNotFoundException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
