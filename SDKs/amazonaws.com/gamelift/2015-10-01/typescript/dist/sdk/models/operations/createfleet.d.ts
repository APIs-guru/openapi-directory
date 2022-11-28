import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFleetXAmzTargetEnum {
    GameLiftCreateFleet = "GameLift.CreateFleet"
}
export declare class CreateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFleetXAmzTargetEnum;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    headers: CreateFleetHeaders;
    request: shared.CreateFleetInput;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createFleetOutput?: shared.CreateFleetOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
