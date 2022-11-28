import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAppliedSchemaArnsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAppliedSchemaArnsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAppliedSchemaArnsRequestBody extends SpeakeasyBase {
    directoryArn: string;
    maxResults?: number;
    nextToken?: string;
    schemaArn?: string;
}
export declare class ListAppliedSchemaArnsRequest extends SpeakeasyBase {
    queryParams: ListAppliedSchemaArnsQueryParams;
    headers: ListAppliedSchemaArnsHeaders;
    request: ListAppliedSchemaArnsRequestBody;
}
export declare class ListAppliedSchemaArnsResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listAppliedSchemaArnsResponse?: shared.ListAppliedSchemaArnsResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
