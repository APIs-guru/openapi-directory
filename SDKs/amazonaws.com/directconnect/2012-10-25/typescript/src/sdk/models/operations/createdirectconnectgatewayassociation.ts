import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGatewayAssociation = "OvertureService.CreateDirectConnectGatewayAssociation"
}


export class CreateDirectConnectGatewayAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDirectConnectGatewayAssociationXAmzTargetEnum;
}


export class CreateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDirectConnectGatewayAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDirectConnectGatewayAssociationRequest;
}


export class CreateDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDirectConnectGatewayAssociationResult?: shared.CreateDirectConnectGatewayAssociationResult;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
