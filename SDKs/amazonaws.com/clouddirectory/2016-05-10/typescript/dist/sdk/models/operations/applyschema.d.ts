import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplySchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class ApplySchemaRequestBody extends SpeakeasyBase {
    publishedSchemaArn: string;
}
export declare class ApplySchemaRequest extends SpeakeasyBase {
    headers: ApplySchemaHeaders;
    request: ApplySchemaRequestBody;
}
export declare class ApplySchemaResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    applySchemaResponse?: shared.ApplySchemaResponse;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidAttachmentException?: shared.InvalidAttachmentException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
