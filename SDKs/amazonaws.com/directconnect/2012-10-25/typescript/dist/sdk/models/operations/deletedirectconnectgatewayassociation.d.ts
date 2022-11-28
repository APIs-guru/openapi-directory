import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGatewayAssociation = "OvertureService.DeleteDirectConnectGatewayAssociation"
}
export declare class DeleteDirectConnectGatewayAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectConnectGatewayAssociationXAmzTargetEnum;
}
export declare class DeleteDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    headers: DeleteDirectConnectGatewayAssociationHeaders;
    request: shared.DeleteDirectConnectGatewayAssociationRequest;
}
export declare class DeleteDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
    contentType: string;
    deleteDirectConnectGatewayAssociationResult?: shared.DeleteDirectConnectGatewayAssociationResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
