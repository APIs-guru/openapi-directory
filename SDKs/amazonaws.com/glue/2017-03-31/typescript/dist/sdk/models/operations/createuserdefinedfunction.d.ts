import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserDefinedFunctionXAmzTargetEnum {
    AwsGlueCreateUserDefinedFunction = "AWSGlue.CreateUserDefinedFunction"
}
export declare class CreateUserDefinedFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserDefinedFunctionXAmzTargetEnum;
}
export declare class CreateUserDefinedFunctionRequest extends SpeakeasyBase {
    headers: CreateUserDefinedFunctionHeaders;
    request: shared.CreateUserDefinedFunctionRequest;
}
export declare class CreateUserDefinedFunctionResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createUserDefinedFunctionResponse?: Map<string, any>;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
