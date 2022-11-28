import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ValidateMatchmakingRuleSetXAmzTargetEnum {
    GameLiftValidateMatchmakingRuleSet = "GameLift.ValidateMatchmakingRuleSet"
}
export declare class ValidateMatchmakingRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ValidateMatchmakingRuleSetXAmzTargetEnum;
}
export declare class ValidateMatchmakingRuleSetRequest extends SpeakeasyBase {
    headers: ValidateMatchmakingRuleSetHeaders;
    request: shared.ValidateMatchmakingRuleSetInput;
}
export declare class ValidateMatchmakingRuleSetResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    unsupportedRegionException?: any;
    validateMatchmakingRuleSetOutput?: shared.ValidateMatchmakingRuleSetOutput;
}
