import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteBgpPeerXAmzTargetEnum {
    OvertureServiceDeleteBgpPeer = "OvertureService.DeleteBGPPeer"
}


export class DeleteBgpPeerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteBgpPeerXAmzTargetEnum;
}


export class DeleteBgpPeerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteBgpPeerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteBgpPeerRequest;
}


export class DeleteBgpPeerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteBgpPeerResponse?: shared.DeleteBgpPeerResponse;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
