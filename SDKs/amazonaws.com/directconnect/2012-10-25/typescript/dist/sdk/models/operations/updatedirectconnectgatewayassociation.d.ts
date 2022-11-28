import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceUpdateDirectConnectGatewayAssociation = "OvertureService.UpdateDirectConnectGatewayAssociation"
}
export declare class UpdateDirectConnectGatewayAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDirectConnectGatewayAssociationXAmzTargetEnum;
}
export declare class UpdateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    headers: UpdateDirectConnectGatewayAssociationHeaders;
    request: shared.UpdateDirectConnectGatewayAssociationRequest;
}
export declare class UpdateDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
    updateDirectConnectGatewayAssociationResult?: shared.UpdateDirectConnectGatewayAssociationResult;
}
