import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum OpenTunnelXAmzTargetEnum {
    IoTSecuredTunnelingOpenTunnel = "IoTSecuredTunneling.OpenTunnel"
}


export class OpenTunnelHeaders extends SpeakeasyBase {
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
  xAmzTarget: OpenTunnelXAmzTargetEnum;
}


export class OpenTunnelRequest extends SpeakeasyBase {
  @Metadata()
  headers: OpenTunnelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OpenTunnelRequest;
}


export class OpenTunnelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  openTunnelResponse?: shared.OpenTunnelResponse;

  @Metadata()
  statusCode: number;
}
