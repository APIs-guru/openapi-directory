import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceAcceptDirectConnectGatewayAssociationProposal = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"
}


export class AcceptDirectConnectGatewayAssociationProposalHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}


export class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptDirectConnectGatewayAssociationProposalHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptDirectConnectGatewayAssociationProposalRequest;
}


export class AcceptDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
  @Metadata()
  acceptDirectConnectGatewayAssociationProposalResult?: shared.AcceptDirectConnectGatewayAssociationProposalResult;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
