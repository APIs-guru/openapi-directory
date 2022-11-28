import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVpcPeeringConnectionXAmzTargetEnum {
    GameLiftDeleteVpcPeeringConnection = "GameLift.DeleteVpcPeeringConnection"
}
export declare class DeleteVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcPeeringConnectionXAmzTargetEnum;
}
export declare class DeleteVpcPeeringConnectionRequest extends SpeakeasyBase {
    headers: DeleteVpcPeeringConnectionHeaders;
    request: shared.DeleteVpcPeeringConnectionInput;
}
export declare class DeleteVpcPeeringConnectionResponse extends SpeakeasyBase {
    contentType: string;
    deleteVpcPeeringConnectionOutput?: Map<string, any>;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
