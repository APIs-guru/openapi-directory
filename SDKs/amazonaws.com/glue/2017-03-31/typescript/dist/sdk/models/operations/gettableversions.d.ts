import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTableVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetTableVersionsXAmzTargetEnum {
    AwsGlueGetTableVersions = "AWSGlue.GetTableVersions"
}
export declare class GetTableVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTableVersionsXAmzTargetEnum;
}
export declare class GetTableVersionsRequest extends SpeakeasyBase {
    queryParams: GetTableVersionsQueryParams;
    headers: GetTableVersionsHeaders;
    request: shared.GetTableVersionsRequest;
}
export declare class GetTableVersionsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getTableVersionsResponse?: shared.GetTableVersionsResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
