import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFleetLocationsXAmzTargetEnum {
    GameLiftDeleteFleetLocations = "GameLift.DeleteFleetLocations"
}
export declare class DeleteFleetLocationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFleetLocationsXAmzTargetEnum;
}
export declare class DeleteFleetLocationsRequest extends SpeakeasyBase {
    headers: DeleteFleetLocationsHeaders;
    request: shared.DeleteFleetLocationsInput;
}
export declare class DeleteFleetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    deleteFleetLocationsOutput?: shared.DeleteFleetLocationsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
