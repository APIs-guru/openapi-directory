import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConfirmPublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPublicVirtualInterface = "OvertureService.ConfirmPublicVirtualInterface"
}


export class ConfirmPublicVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConfirmPublicVirtualInterfaceXAmzTargetEnum;
}


export class ConfirmPublicVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConfirmPublicVirtualInterfaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmPublicVirtualInterfaceRequest;
}


export class ConfirmPublicVirtualInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  confirmPublicVirtualInterfaceResponse?: shared.ConfirmPublicVirtualInterfaceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
