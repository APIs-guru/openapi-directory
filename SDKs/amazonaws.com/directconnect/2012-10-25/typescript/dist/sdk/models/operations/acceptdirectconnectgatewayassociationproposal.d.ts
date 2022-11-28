import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceAcceptDirectConnectGatewayAssociationProposal = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"
}
export declare class AcceptDirectConnectGatewayAssociationProposalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}
export declare class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    headers: AcceptDirectConnectGatewayAssociationProposalHeaders;
    request: shared.AcceptDirectConnectGatewayAssociationProposalRequest;
}
export declare class AcceptDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
    acceptDirectConnectGatewayAssociationProposalResult?: shared.AcceptDirectConnectGatewayAssociationProposalResult;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
