import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMatchmakingConfigurationXAmzTargetEnum {
    GameLiftCreateMatchmakingConfiguration = "GameLift.CreateMatchmakingConfiguration"
}
export declare class CreateMatchmakingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMatchmakingConfigurationXAmzTargetEnum;
}
export declare class CreateMatchmakingConfigurationRequest extends SpeakeasyBase {
    headers: CreateMatchmakingConfigurationHeaders;
    request: shared.CreateMatchmakingConfigurationInput;
}
export declare class CreateMatchmakingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    createMatchmakingConfigurationOutput?: shared.CreateMatchmakingConfigurationOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unsupportedRegionException?: any;
}
