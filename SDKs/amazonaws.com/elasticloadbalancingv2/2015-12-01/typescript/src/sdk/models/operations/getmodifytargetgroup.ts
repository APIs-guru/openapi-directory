import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyTargetGroupActionEnum {
    ModifyTargetGroup = "ModifyTargetGroup"
}

export enum GetModifyTargetGroupHealthCheckProtocolEnum {
    Http = "HTTP"
,    Https = "HTTPS"
,    Tcp = "TCP"
,    Tls = "TLS"
,    Udp = "UDP"
,    TcpUdp = "TCP_UDP"
,    Geneve = "GENEVE"
}


// GetModifyTargetGroupMatcher
/** 
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
export class GetModifyTargetGroupMatcher extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=GrpcCode" })
  grpcCode?: string;

  @Metadata({ data: "queryParam, name=HttpCode" })
  httpCode?: string;
}

export enum GetModifyTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetModifyTargetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTargetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheckEnabled" })
  healthCheckEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheckIntervalSeconds" })
  healthCheckIntervalSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheckPath" })
  healthCheckPath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheckPort" })
  healthCheckPort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheckProtocol" })
  healthCheckProtocol?: GetModifyTargetGroupHealthCheckProtocolEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheckTimeoutSeconds" })
  healthCheckTimeoutSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthyThresholdCount" })
  healthyThresholdCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Matcher" })
  matcher?: GetModifyTargetGroupMatcher;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" })
  targetGroupArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UnhealthyThresholdCount" })
  unhealthyThresholdCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTargetGroupVersionEnum;
}


export class GetModifyTargetGroupHeaders extends SpeakeasyBase {
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
}


export class GetModifyTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyTargetGroupQueryParams;

  @Metadata()
  headers: GetModifyTargetGroupHeaders;
}


export class GetModifyTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
