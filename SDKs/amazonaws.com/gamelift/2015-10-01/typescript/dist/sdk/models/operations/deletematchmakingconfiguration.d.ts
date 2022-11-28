import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMatchmakingConfigurationXAmzTargetEnum {
    GameLiftDeleteMatchmakingConfiguration = "GameLift.DeleteMatchmakingConfiguration"
}
export declare class DeleteMatchmakingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMatchmakingConfigurationXAmzTargetEnum;
}
export declare class DeleteMatchmakingConfigurationRequest extends SpeakeasyBase {
    headers: DeleteMatchmakingConfigurationHeaders;
    request: shared.DeleteMatchmakingConfigurationInput;
}
export declare class DeleteMatchmakingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteMatchmakingConfigurationOutput?: Map<string, any>;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unsupportedRegionException?: any;
}
