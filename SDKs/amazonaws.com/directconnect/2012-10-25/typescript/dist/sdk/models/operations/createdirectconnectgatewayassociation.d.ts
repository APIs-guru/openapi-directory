import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGatewayAssociation = "OvertureService.CreateDirectConnectGatewayAssociation"
}
export declare class CreateDirectConnectGatewayAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectConnectGatewayAssociationXAmzTargetEnum;
}
export declare class CreateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    headers: CreateDirectConnectGatewayAssociationHeaders;
    request: shared.CreateDirectConnectGatewayAssociationRequest;
}
export declare class CreateDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
    contentType: string;
    createDirectConnectGatewayAssociationResult?: shared.CreateDirectConnectGatewayAssociationResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
