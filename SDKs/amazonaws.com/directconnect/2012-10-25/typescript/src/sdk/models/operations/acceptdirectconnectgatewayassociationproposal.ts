import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceAcceptDirectConnectGatewayAssociationProposal = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"
}


export class AcceptDirectConnectGatewayAssociationProposalHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}


export class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcceptDirectConnectGatewayAssociationProposalHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AcceptDirectConnectGatewayAssociationProposalRequest;
}


export class AcceptDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptDirectConnectGatewayAssociationProposalResult?: shared.AcceptDirectConnectGatewayAssociationProposalResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
