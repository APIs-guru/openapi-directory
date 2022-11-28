import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGatewayAssociationProposal = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"
}
export declare class DeleteDirectConnectGatewayAssociationProposalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}
export declare class DeleteDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    headers: DeleteDirectConnectGatewayAssociationProposalHeaders;
    request: shared.DeleteDirectConnectGatewayAssociationProposalRequest;
}
export declare class DeleteDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
    contentType: string;
    deleteDirectConnectGatewayAssociationProposalResult?: shared.DeleteDirectConnectGatewayAssociationProposalResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
