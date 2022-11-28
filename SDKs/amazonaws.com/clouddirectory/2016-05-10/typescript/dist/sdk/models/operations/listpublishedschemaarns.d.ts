import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPublishedSchemaArnsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListPublishedSchemaArnsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPublishedSchemaArnsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    schemaArn?: string;
}
export declare class ListPublishedSchemaArnsRequest extends SpeakeasyBase {
    queryParams: ListPublishedSchemaArnsQueryParams;
    headers: ListPublishedSchemaArnsHeaders;
    request: ListPublishedSchemaArnsRequestBody;
}
export declare class ListPublishedSchemaArnsResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    listPublishedSchemaArnsResponse?: shared.ListPublishedSchemaArnsResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
