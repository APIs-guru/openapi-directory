import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListManagedSchemaArnsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListManagedSchemaArnsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListManagedSchemaArnsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    schemaArn?: string;
}
export declare class ListManagedSchemaArnsRequest extends SpeakeasyBase {
    queryParams: ListManagedSchemaArnsQueryParams;
    headers: ListManagedSchemaArnsHeaders;
    request: ListManagedSchemaArnsRequestBody;
}
export declare class ListManagedSchemaArnsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidNextTokenException?: any;
    listManagedSchemaArnsResponse?: shared.ListManagedSchemaArnsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
