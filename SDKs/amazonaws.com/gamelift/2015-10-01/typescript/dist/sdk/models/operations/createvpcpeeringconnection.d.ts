import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVpcPeeringConnectionXAmzTargetEnum {
    GameLiftCreateVpcPeeringConnection = "GameLift.CreateVpcPeeringConnection"
}
export declare class CreateVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcPeeringConnectionXAmzTargetEnum;
}
export declare class CreateVpcPeeringConnectionRequest extends SpeakeasyBase {
    headers: CreateVpcPeeringConnectionHeaders;
    request: shared.CreateVpcPeeringConnectionInput;
}
export declare class CreateVpcPeeringConnectionResponse extends SpeakeasyBase {
    contentType: string;
    createVpcPeeringConnectionOutput?: Map<string, any>;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
