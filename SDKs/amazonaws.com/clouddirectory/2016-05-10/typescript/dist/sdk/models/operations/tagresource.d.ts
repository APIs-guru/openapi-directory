import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceRequestBody extends SpeakeasyBase {
    resourceArn: string;
    tags: shared.Tag[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidTaggingRequestException?: shared.InvalidTaggingRequestException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
    validationException?: shared.ValidationException;
}
