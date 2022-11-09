import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceUpdateDirectConnectGatewayAssociation = "OvertureService.UpdateDirectConnectGatewayAssociation"
}


export class UpdateDirectConnectGatewayAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateDirectConnectGatewayAssociationXAmzTargetEnum;
}


export class UpdateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateDirectConnectGatewayAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateDirectConnectGatewayAssociationRequest;
}


export class UpdateDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDirectConnectGatewayAssociationResult?: shared.UpdateDirectConnectGatewayAssociationResult;
}
