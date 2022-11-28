import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserDefinedFunctionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetUserDefinedFunctionsXAmzTargetEnum {
    AwsGlueGetUserDefinedFunctions = "AWSGlue.GetUserDefinedFunctions"
}
export declare class GetUserDefinedFunctionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserDefinedFunctionsXAmzTargetEnum;
}
export declare class GetUserDefinedFunctionsRequest extends SpeakeasyBase {
    queryParams: GetUserDefinedFunctionsQueryParams;
    headers: GetUserDefinedFunctionsHeaders;
    request: shared.GetUserDefinedFunctionsRequest;
}
export declare class GetUserDefinedFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getUserDefinedFunctionsResponse?: shared.GetUserDefinedFunctionsResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
