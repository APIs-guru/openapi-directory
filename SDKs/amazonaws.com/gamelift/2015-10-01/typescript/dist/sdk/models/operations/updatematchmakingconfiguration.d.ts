import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMatchmakingConfigurationXAmzTargetEnum {
    GameLiftUpdateMatchmakingConfiguration = "GameLift.UpdateMatchmakingConfiguration"
}
export declare class UpdateMatchmakingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMatchmakingConfigurationXAmzTargetEnum;
}
export declare class UpdateMatchmakingConfigurationRequest extends SpeakeasyBase {
    headers: UpdateMatchmakingConfigurationHeaders;
    request: shared.UpdateMatchmakingConfigurationInput;
}
export declare class UpdateMatchmakingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedRegionException?: any;
    updateMatchmakingConfigurationOutput?: shared.UpdateMatchmakingConfigurationOutput;
}
