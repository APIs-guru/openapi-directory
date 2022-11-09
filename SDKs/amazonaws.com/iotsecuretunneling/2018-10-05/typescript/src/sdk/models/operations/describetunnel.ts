import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTunnelXAmzTargetEnum {
    IoTSecuredTunnelingDescribeTunnel = "IoTSecuredTunneling.DescribeTunnel"
}


export class DescribeTunnelHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTunnelXAmzTargetEnum;
}


export class DescribeTunnelRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTunnelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTunnelRequest;
}


export class DescribeTunnelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTunnelResponse?: shared.DescribeTunnelResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
