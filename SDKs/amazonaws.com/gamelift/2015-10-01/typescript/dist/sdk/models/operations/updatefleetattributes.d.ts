import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFleetAttributesXAmzTargetEnum {
    GameLiftUpdateFleetAttributes = "GameLift.UpdateFleetAttributes"
}
export declare class UpdateFleetAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetAttributesXAmzTargetEnum;
}
export declare class UpdateFleetAttributesRequest extends SpeakeasyBase {
    headers: UpdateFleetAttributesHeaders;
    request: shared.UpdateFleetAttributesInput;
}
export declare class UpdateFleetAttributesResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateFleetAttributesOutput?: shared.UpdateFleetAttributesOutput;
}
