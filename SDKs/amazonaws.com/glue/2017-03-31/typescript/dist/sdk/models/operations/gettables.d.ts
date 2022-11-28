import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTablesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetTablesXAmzTargetEnum {
    AwsGlueGetTables = "AWSGlue.GetTables"
}
export declare class GetTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTablesXAmzTargetEnum;
}
export declare class GetTablesRequest extends SpeakeasyBase {
    queryParams: GetTablesQueryParams;
    headers: GetTablesHeaders;
    request: shared.GetTablesRequest;
}
export declare class GetTablesResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getTablesResponse?: shared.GetTablesResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
