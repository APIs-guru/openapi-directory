import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVpcPeeringAuthorizationXAmzTargetEnum {
    GameLiftDeleteVpcPeeringAuthorization = "GameLift.DeleteVpcPeeringAuthorization"
}
export declare class DeleteVpcPeeringAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcPeeringAuthorizationXAmzTargetEnum;
}
export declare class DeleteVpcPeeringAuthorizationRequest extends SpeakeasyBase {
    headers: DeleteVpcPeeringAuthorizationHeaders;
    request: shared.DeleteVpcPeeringAuthorizationInput;
}
export declare class DeleteVpcPeeringAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    deleteVpcPeeringAuthorizationOutput?: Map<string, any>;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
