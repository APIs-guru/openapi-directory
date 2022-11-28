import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSchemaFromJsonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class PutSchemaFromJsonRequestBody extends SpeakeasyBase {
    document: string;
}
export declare class PutSchemaFromJsonRequest extends SpeakeasyBase {
    headers: PutSchemaFromJsonHeaders;
    request: PutSchemaFromJsonRequestBody;
}
export declare class PutSchemaFromJsonResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidRuleException?: shared.InvalidRuleException;
    invalidSchemaDocException?: shared.InvalidSchemaDocException;
    limitExceededException?: shared.LimitExceededException;
    putSchemaFromJsonResponse?: shared.PutSchemaFromJsonResponse;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
