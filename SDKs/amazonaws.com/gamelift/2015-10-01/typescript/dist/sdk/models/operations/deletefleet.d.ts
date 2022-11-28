import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFleetXAmzTargetEnum {
    GameLiftDeleteFleet = "GameLift.DeleteFleet"
}
export declare class DeleteFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFleetXAmzTargetEnum;
}
export declare class DeleteFleetRequest extends SpeakeasyBase {
    headers: DeleteFleetHeaders;
    request: shared.DeleteFleetInput;
}
export declare class DeleteFleetResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
