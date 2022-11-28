import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ConfirmPrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPrivateVirtualInterface = "OvertureService.ConfirmPrivateVirtualInterface"
}


export class ConfirmPrivateVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConfirmPrivateVirtualInterfaceXAmzTargetEnum;
}


export class ConfirmPrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ConfirmPrivateVirtualInterfaceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmPrivateVirtualInterfaceRequest;
}


export class ConfirmPrivateVirtualInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  confirmPrivateVirtualInterfaceResponse?: shared.ConfirmPrivateVirtualInterfaceResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
