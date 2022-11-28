import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetConnectionsXAmzTargetEnum {
    AwsGlueGetConnections = "AWSGlue.GetConnections"
}
export declare class GetConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectionsXAmzTargetEnum;
}
export declare class GetConnectionsRequest extends SpeakeasyBase {
    queryParams: GetConnectionsQueryParams;
    headers: GetConnectionsHeaders;
    request: shared.GetConnectionsRequest;
}
export declare class GetConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getConnectionsResponse?: shared.GetConnectionsResponse;
    glueEncryptionException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
