import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMatchmakingRuleSetXAmzTargetEnum {
    GameLiftDeleteMatchmakingRuleSet = "GameLift.DeleteMatchmakingRuleSet"
}
export declare class DeleteMatchmakingRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMatchmakingRuleSetXAmzTargetEnum;
}
export declare class DeleteMatchmakingRuleSetRequest extends SpeakeasyBase {
    headers: DeleteMatchmakingRuleSetHeaders;
    request: shared.DeleteMatchmakingRuleSetInput;
}
export declare class DeleteMatchmakingRuleSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteMatchmakingRuleSetOutput?: Map<string, any>;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unsupportedRegionException?: any;
}
