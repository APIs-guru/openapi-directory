import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserDefinedFunctionXAmzTargetEnum {
    AwsGlueUpdateUserDefinedFunction = "AWSGlue.UpdateUserDefinedFunction"
}
export declare class UpdateUserDefinedFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserDefinedFunctionXAmzTargetEnum;
}
export declare class UpdateUserDefinedFunctionRequest extends SpeakeasyBase {
    headers: UpdateUserDefinedFunctionHeaders;
    request: shared.UpdateUserDefinedFunctionRequest;
}
export declare class UpdateUserDefinedFunctionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateUserDefinedFunctionResponse?: Map<string, any>;
}
