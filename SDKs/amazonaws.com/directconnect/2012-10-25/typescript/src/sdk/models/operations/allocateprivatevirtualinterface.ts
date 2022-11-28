import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AllocatePrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocatePrivateVirtualInterface = "OvertureService.AllocatePrivateVirtualInterface"
}


export class AllocatePrivateVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AllocatePrivateVirtualInterfaceXAmzTargetEnum;
}


export class AllocatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AllocatePrivateVirtualInterfaceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AllocatePrivateVirtualInterfaceRequest;
}


export class AllocatePrivateVirtualInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  duplicateTagKeysException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyTagsException?: any;

  @SpeakeasyMetadata()
  virtualInterface?: shared.VirtualInterface;
}
