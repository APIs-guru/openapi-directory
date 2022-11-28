import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRuntimeConfigurationXAmzTargetEnum {
    GameLiftUpdateRuntimeConfiguration = "GameLift.UpdateRuntimeConfiguration"
}
export declare class UpdateRuntimeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRuntimeConfigurationXAmzTargetEnum;
}
export declare class UpdateRuntimeConfigurationRequest extends SpeakeasyBase {
    headers: UpdateRuntimeConfigurationHeaders;
    request: shared.UpdateRuntimeConfigurationInput;
}
export declare class UpdateRuntimeConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateRuntimeConfigurationOutput?: shared.UpdateRuntimeConfigurationOutput;
}
