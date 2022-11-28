import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDevelopmentSchemaArnsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDevelopmentSchemaArnsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDevelopmentSchemaArnsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDevelopmentSchemaArnsRequest extends SpeakeasyBase {
    queryParams: ListDevelopmentSchemaArnsQueryParams;
    headers: ListDevelopmentSchemaArnsHeaders;
    request: ListDevelopmentSchemaArnsRequestBody;
}
export declare class ListDevelopmentSchemaArnsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    listDevelopmentSchemaArnsResponse?: shared.ListDevelopmentSchemaArnsResponse;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
