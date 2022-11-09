import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AllocateTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocateTransitVirtualInterface = "OvertureService.AllocateTransitVirtualInterface"
}


export class AllocateTransitVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AllocateTransitVirtualInterfaceXAmzTargetEnum;
}


export class AllocateTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AllocateTransitVirtualInterfaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AllocateTransitVirtualInterfaceRequest;
}


export class AllocateTransitVirtualInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  allocateTransitVirtualInterfaceResult?: shared.AllocateTransitVirtualInterfaceResult;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  duplicateTagKeysException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsException?: any;
}
