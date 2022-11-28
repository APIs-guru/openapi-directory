import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFleetPortSettingsXAmzTargetEnum {
    GameLiftUpdateFleetPortSettings = "GameLift.UpdateFleetPortSettings"
}
export declare class UpdateFleetPortSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetPortSettingsXAmzTargetEnum;
}
export declare class UpdateFleetPortSettingsRequest extends SpeakeasyBase {
    headers: UpdateFleetPortSettingsHeaders;
    request: shared.UpdateFleetPortSettingsInput;
}
export declare class UpdateFleetPortSettingsResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateFleetPortSettingsOutput?: shared.UpdateFleetPortSettingsOutput;
}
