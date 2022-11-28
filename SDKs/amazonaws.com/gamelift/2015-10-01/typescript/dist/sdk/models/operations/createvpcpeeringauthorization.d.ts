import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVpcPeeringAuthorizationXAmzTargetEnum {
    GameLiftCreateVpcPeeringAuthorization = "GameLift.CreateVpcPeeringAuthorization"
}
export declare class CreateVpcPeeringAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcPeeringAuthorizationXAmzTargetEnum;
}
export declare class CreateVpcPeeringAuthorizationRequest extends SpeakeasyBase {
    headers: CreateVpcPeeringAuthorizationHeaders;
    request: shared.CreateVpcPeeringAuthorizationInput;
}
export declare class CreateVpcPeeringAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    createVpcPeeringAuthorizationOutput?: shared.CreateVpcPeeringAuthorizationOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
