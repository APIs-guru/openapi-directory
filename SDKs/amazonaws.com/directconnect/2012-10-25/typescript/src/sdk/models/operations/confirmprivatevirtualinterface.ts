import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConfirmPrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPrivateVirtualInterface = "OvertureService.ConfirmPrivateVirtualInterface"
}


export class ConfirmPrivateVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConfirmPrivateVirtualInterfaceXAmzTargetEnum;
}


export class ConfirmPrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConfirmPrivateVirtualInterfaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmPrivateVirtualInterfaceRequest;
}


export class ConfirmPrivateVirtualInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  confirmPrivateVirtualInterfaceResponse?: shared.ConfirmPrivateVirtualInterfaceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
