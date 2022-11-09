import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGatewayAssociationProposal = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"
}


export class DeleteDirectConnectGatewayAssociationProposalHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}


export class DeleteDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDirectConnectGatewayAssociationProposalHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDirectConnectGatewayAssociationProposalRequest;
}


export class DeleteDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDirectConnectGatewayAssociationProposalResult?: shared.DeleteDirectConnectGatewayAssociationProposalResult;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
