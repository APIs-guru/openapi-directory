import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetDatabasesXAmzTargetEnum {
    AwsGlueGetDatabases = "AWSGlue.GetDatabases"
}
export declare class GetDatabasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDatabasesXAmzTargetEnum;
}
export declare class GetDatabasesRequest extends SpeakeasyBase {
    queryParams: GetDatabasesQueryParams;
    headers: GetDatabasesHeaders;
    request: shared.GetDatabasesRequest;
}
export declare class GetDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    getDatabasesResponse?: shared.GetDatabasesResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
