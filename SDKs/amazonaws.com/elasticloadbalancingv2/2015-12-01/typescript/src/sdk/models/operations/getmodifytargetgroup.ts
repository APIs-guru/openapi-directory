import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyTargetGroupActionEnum {
    ModifyTargetGroup = "ModifyTargetGroup"
}

export enum GetModifyTargetGroupHealthCheckProtocolEnum {
    Http = "HTTP",
    Https = "HTTPS",
    Tcp = "TCP",
    Tls = "TLS",
    Udp = "UDP",
    TcpUdp = "TCP_UDP",
    Geneve = "GENEVE"
}


// GetModifyTargetGroupMatcher
/** 
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
export class GetModifyTargetGroupMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=GrpcCode" })
  grpcCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=HttpCode" })
  httpCode?: string;
}

export enum GetModifyTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetModifyTargetGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTargetGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckEnabled" })
  healthCheckEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckIntervalSeconds" })
  healthCheckIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckPath" })
  healthCheckPath?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckPort" })
  healthCheckPort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckProtocol" })
  healthCheckProtocol?: GetModifyTargetGroupHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheckTimeoutSeconds" })
  healthCheckTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthyThresholdCount" })
  healthyThresholdCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Matcher" })
  matcher?: GetModifyTargetGroupMatcher;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" })
  targetGroupArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UnhealthyThresholdCount" })
  unhealthyThresholdCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTargetGroupVersionEnum;
}


export class GetModifyTargetGroupHeaders extends SpeakeasyBase {
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
}


export class GetModifyTargetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyTargetGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyTargetGroupHeaders;
}


export class GetModifyTargetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
