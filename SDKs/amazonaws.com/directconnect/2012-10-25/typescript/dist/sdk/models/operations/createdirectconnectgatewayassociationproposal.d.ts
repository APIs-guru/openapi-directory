import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGatewayAssociationProposal = "OvertureService.CreateDirectConnectGatewayAssociationProposal"
}
export declare class CreateDirectConnectGatewayAssociationProposalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}
export declare class CreateDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    headers: CreateDirectConnectGatewayAssociationProposalHeaders;
    request: shared.CreateDirectConnectGatewayAssociationProposalRequest;
}
export declare class CreateDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
    contentType: string;
    createDirectConnectGatewayAssociationProposalResult?: shared.CreateDirectConnectGatewayAssociationProposalResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
