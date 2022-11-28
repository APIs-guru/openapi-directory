import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserDefinedFunctionXAmzTargetEnum {
    AwsGlueDeleteUserDefinedFunction = "AWSGlue.DeleteUserDefinedFunction"
}
export declare class DeleteUserDefinedFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserDefinedFunctionXAmzTargetEnum;
}
export declare class DeleteUserDefinedFunctionRequest extends SpeakeasyBase {
    headers: DeleteUserDefinedFunctionHeaders;
    request: shared.DeleteUserDefinedFunctionRequest;
}
export declare class DeleteUserDefinedFunctionResponse extends SpeakeasyBase {
    contentType: string;
    deleteUserDefinedFunctionResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
