import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEnableAvailabilityZonesForLoadBalancerActionEnum {
    EnableAvailabilityZonesForLoadBalancer = "EnableAvailabilityZonesForLoadBalancer"
}

export enum GetEnableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetEnableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableAvailabilityZonesForLoadBalancerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZones" })
  availabilityZones: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableAvailabilityZonesForLoadBalancerVersionEnum;
}


export class GetEnableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
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


export class GetEnableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEnableAvailabilityZonesForLoadBalancerQueryParams;

  @SpeakeasyMetadata()
  headers: GetEnableAvailabilityZonesForLoadBalancerHeaders;
}


export class GetEnableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
