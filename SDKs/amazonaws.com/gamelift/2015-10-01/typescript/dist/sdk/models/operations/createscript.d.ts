import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateScriptXAmzTargetEnum {
    GameLiftCreateScript = "GameLift.CreateScript"
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
    request: shared.CreateScriptInput;
}
export declare class CreateScriptResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createScriptOutput?: shared.CreateScriptOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
