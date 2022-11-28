import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateScriptXAmzTargetEnum {
    AwsGlueCreateScript = "AWSGlue.CreateScript"
}
export declare class CreateScriptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateScriptXAmzTargetEnum;
}
export declare class CreateScriptRequest extends SpeakeasyBase {
    headers: CreateScriptHeaders;
    request: shared.CreateScriptRequest;
}
export declare class CreateScriptResponse extends SpeakeasyBase {
    contentType: string;
    createScriptResponse?: shared.CreateScriptResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
