import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFleetCapacityXAmzTargetEnum {
    GameLiftUpdateFleetCapacity = "GameLift.UpdateFleetCapacity"
}
export declare class UpdateFleetCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetCapacityXAmzTargetEnum;
}
export declare class UpdateFleetCapacityRequest extends SpeakeasyBase {
    headers: UpdateFleetCapacityHeaders;
    request: shared.UpdateFleetCapacityInput;
}
export declare class UpdateFleetCapacityResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateFleetCapacityOutput?: shared.UpdateFleetCapacityOutput;
}
