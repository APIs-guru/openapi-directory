import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFleetLocationsXAmzTargetEnum {
    GameLiftCreateFleetLocations = "GameLift.CreateFleetLocations"
}
export declare class CreateFleetLocationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFleetLocationsXAmzTargetEnum;
}
export declare class CreateFleetLocationsRequest extends SpeakeasyBase {
    headers: CreateFleetLocationsHeaders;
    request: shared.CreateFleetLocationsInput;
}
export declare class CreateFleetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    createFleetLocationsOutput?: shared.CreateFleetLocationsOutput;
    internalServiceException?: any;
    invalidFleetStatusException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
