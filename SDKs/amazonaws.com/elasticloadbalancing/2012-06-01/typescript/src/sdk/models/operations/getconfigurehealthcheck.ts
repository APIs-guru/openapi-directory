import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetConfigureHealthCheckActionEnum {
    ConfigureHealthCheck = "ConfigureHealthCheck"
}


// GetConfigureHealthCheckHealthCheck
/** 
 * Information about a health check.
**/
export class GetConfigureHealthCheckHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=HealthyThreshold" })
  healthyThreshold: number;

  @SpeakeasyMetadata({ data: "queryParam, name=Interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "queryParam, name=Target" })
  target: string;

  @SpeakeasyMetadata({ data: "queryParam, name=Timeout" })
  timeout: number;

  @SpeakeasyMetadata({ data: "queryParam, name=UnhealthyThreshold" })
  unhealthyThreshold: number;
}

export enum GetConfigureHealthCheckVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetConfigureHealthCheckQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetConfigureHealthCheckActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthCheck" })
  healthCheck: GetConfigureHealthCheckHealthCheck;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetConfigureHealthCheckVersionEnum;
}


export class GetConfigureHealthCheckHeaders extends SpeakeasyBase {
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


export class GetConfigureHealthCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConfigureHealthCheckQueryParams;

  @SpeakeasyMetadata()
  headers: GetConfigureHealthCheckHeaders;
}


export class GetConfigureHealthCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
