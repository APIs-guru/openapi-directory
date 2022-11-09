import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteVirtualInterfaceXAmzTargetEnum {
    OvertureServiceDeleteVirtualInterface = "OvertureService.DeleteVirtualInterface"
}


export class DeleteVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteVirtualInterfaceXAmzTargetEnum;
}


export class DeleteVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteVirtualInterfaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteVirtualInterfaceRequest;
}


export class DeleteVirtualInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteVirtualInterfaceResponse?: shared.DeleteVirtualInterfaceResponse;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
