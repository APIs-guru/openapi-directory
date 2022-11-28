import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMatchmakingRuleSetXAmzTargetEnum {
    GameLiftCreateMatchmakingRuleSet = "GameLift.CreateMatchmakingRuleSet"
}
export declare class CreateMatchmakingRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMatchmakingRuleSetXAmzTargetEnum;
}
export declare class CreateMatchmakingRuleSetRequest extends SpeakeasyBase {
    headers: CreateMatchmakingRuleSetHeaders;
    request: shared.CreateMatchmakingRuleSetInput;
}
export declare class CreateMatchmakingRuleSetResponse extends SpeakeasyBase {
    contentType: string;
    createMatchmakingRuleSetOutput?: shared.CreateMatchmakingRuleSetOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unsupportedRegionException?: any;
}
