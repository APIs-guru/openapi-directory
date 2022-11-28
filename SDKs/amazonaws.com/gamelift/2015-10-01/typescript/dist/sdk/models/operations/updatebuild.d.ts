import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBuildXAmzTargetEnum {
    GameLiftUpdateBuild = "GameLift.UpdateBuild"
}
export declare class UpdateBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBuildXAmzTargetEnum;
}
export declare class UpdateBuildRequest extends SpeakeasyBase {
    headers: UpdateBuildHeaders;
    request: shared.UpdateBuildInput;
}
export declare class UpdateBuildResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateBuildOutput?: shared.UpdateBuildOutput;
}
