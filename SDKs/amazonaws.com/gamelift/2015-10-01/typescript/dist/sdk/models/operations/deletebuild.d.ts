import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBuildXAmzTargetEnum {
    GameLiftDeleteBuild = "GameLift.DeleteBuild"
}
export declare class DeleteBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBuildXAmzTargetEnum;
}
export declare class DeleteBuildRequest extends SpeakeasyBase {
    headers: DeleteBuildHeaders;
    request: shared.DeleteBuildInput;
}
export declare class DeleteBuildResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
