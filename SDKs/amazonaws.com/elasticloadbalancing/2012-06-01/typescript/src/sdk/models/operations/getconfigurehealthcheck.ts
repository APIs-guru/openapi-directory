import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetConfigureHealthCheckActionEnum {
    ConfigureHealthCheck = "ConfigureHealthCheck"
}


// GetConfigureHealthCheckHealthCheck
/** 
 * Information about a health check.
**/
export class GetConfigureHealthCheckHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=HealthyThreshold" })
  healthyThreshold: number;

  @Metadata({ data: "queryParam, name=Interval" })
  interval: number;

  @Metadata({ data: "queryParam, name=Target" })
  target: string;

  @Metadata({ data: "queryParam, name=Timeout" })
  timeout: number;

  @Metadata({ data: "queryParam, name=UnhealthyThreshold" })
  unhealthyThreshold: number;
}

export enum GetConfigureHealthCheckVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetConfigureHealthCheckQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetConfigureHealthCheckActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthCheck" })
  healthCheck: GetConfigureHealthCheckHealthCheck;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetConfigureHealthCheckVersionEnum;
}


export class GetConfigureHealthCheckHeaders extends SpeakeasyBase {
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


export class GetConfigureHealthCheckRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConfigureHealthCheckQueryParams;

  @Metadata()
  headers: GetConfigureHealthCheckHeaders;
}


export class GetConfigureHealthCheckResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
