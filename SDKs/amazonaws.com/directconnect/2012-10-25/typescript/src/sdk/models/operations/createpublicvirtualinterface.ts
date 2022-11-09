import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreatePublicVirtualInterface = "OvertureService.CreatePublicVirtualInterface"
}


export class CreatePublicVirtualInterfaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePublicVirtualInterfaceXAmzTargetEnum;
}


export class CreatePublicVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePublicVirtualInterfaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePublicVirtualInterfaceRequest;
}


export class CreatePublicVirtualInterfaceResponse extends SpeakeasyBase {
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

  @Metadata()
  virtualInterface?: shared.VirtualInterface;
}
