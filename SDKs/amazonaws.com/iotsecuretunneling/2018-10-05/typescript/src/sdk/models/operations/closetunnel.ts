import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CloseTunnelXAmzTargetEnum {
    IoTSecuredTunnelingCloseTunnel = "IoTSecuredTunneling.CloseTunnel"
}


export class CloseTunnelHeaders extends SpeakeasyBase {
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
  xAmzTarget: CloseTunnelXAmzTargetEnum;
}


export class CloseTunnelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CloseTunnelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CloseTunnelRequest;
}


export class CloseTunnelResponse extends SpeakeasyBase {
  @Metadata()
  closeTunnelResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
