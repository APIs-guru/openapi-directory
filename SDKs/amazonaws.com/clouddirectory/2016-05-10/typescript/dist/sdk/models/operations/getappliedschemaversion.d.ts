import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppliedSchemaVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAppliedSchemaVersionRequestBody extends SpeakeasyBase {
    schemaArn: string;
}
export declare class GetAppliedSchemaVersionRequest extends SpeakeasyBase {
    headers: GetAppliedSchemaVersionHeaders;
    request: GetAppliedSchemaVersionRequestBody;
}
export declare class GetAppliedSchemaVersionResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    getAppliedSchemaVersionResponse?: shared.GetAppliedSchemaVersionResponse;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
