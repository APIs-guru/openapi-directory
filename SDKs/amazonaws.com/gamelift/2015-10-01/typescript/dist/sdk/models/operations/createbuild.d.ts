import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBuildXAmzTargetEnum {
    GameLiftCreateBuild = "GameLift.CreateBuild"
}
export declare class CreateBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBuildXAmzTargetEnum;
}
export declare class CreateBuildRequest extends SpeakeasyBase {
    headers: CreateBuildHeaders;
    request: shared.CreateBuildInput;
}
export declare class CreateBuildResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createBuildOutput?: shared.CreateBuildOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
