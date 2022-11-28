import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class PublishSchemaRequestBody extends SpeakeasyBase {
    minorVersion?: string;
    name?: string;
    version: string;
}
export declare class PublishSchemaRequest extends SpeakeasyBase {
    headers: PublishSchemaHeaders;
    request: PublishSchemaRequestBody;
}
export declare class PublishSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    publishSchemaResponse?: shared.PublishSchemaResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    schemaAlreadyPublishedException?: shared.SchemaAlreadyPublishedException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
