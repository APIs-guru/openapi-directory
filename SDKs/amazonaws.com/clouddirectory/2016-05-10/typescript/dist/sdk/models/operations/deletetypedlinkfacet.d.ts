import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
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
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    deleteTypedLinkFacetResponse?: Map<string, any>;
    facetNotFoundException?: shared.FacetNotFoundException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
