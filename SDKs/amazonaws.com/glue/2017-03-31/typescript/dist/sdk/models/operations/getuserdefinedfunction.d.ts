import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserDefinedFunctionXAmzTargetEnum {
    AwsGlueGetUserDefinedFunction = "AWSGlue.GetUserDefinedFunction"
}
export declare class GetUserDefinedFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserDefinedFunctionXAmzTargetEnum;
}
export declare class GetUserDefinedFunctionRequest extends SpeakeasyBase {
    headers: GetUserDefinedFunctionHeaders;
    request: shared.GetUserDefinedFunctionRequest;
}
export declare class GetUserDefinedFunctionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getUserDefinedFunctionResponse?: shared.GetUserDefinedFunctionResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
