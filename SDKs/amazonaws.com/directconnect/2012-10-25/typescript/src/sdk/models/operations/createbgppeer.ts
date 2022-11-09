import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateBgpPeerXAmzTargetEnum {
    OvertureServiceCreateBgpPeer = "OvertureService.CreateBGPPeer"
}


export class CreateBgpPeerHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateBgpPeerXAmzTargetEnum;
}


export class CreateBgpPeerRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBgpPeerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBgpPeerRequest;
}


export class CreateBgpPeerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createBgpPeerResponse?: shared.CreateBgpPeerResponse;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
