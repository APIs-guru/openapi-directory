import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisableAvailabilityZonesForLoadBalancerActionEnum {
    DisableAvailabilityZonesForLoadBalancer = "DisableAvailabilityZonesForLoadBalancer"
}

export enum GetDisableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDisableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableAvailabilityZonesForLoadBalancerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZones" })
  availabilityZones: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableAvailabilityZonesForLoadBalancerVersionEnum;
}


export class GetDisableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
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


export class GetDisableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisableAvailabilityZonesForLoadBalancerQueryParams;

  @Metadata()
  headers: GetDisableAvailabilityZonesForLoadBalancerHeaders;
}


export class GetDisableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
