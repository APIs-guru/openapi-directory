import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisableAvailabilityZonesForLoadBalancerActionEnum {
    DisableAvailabilityZonesForLoadBalancer = "DisableAvailabilityZonesForLoadBalancer"
}

export enum GetDisableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDisableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableAvailabilityZonesForLoadBalancerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZones" })
  availabilityZones: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableAvailabilityZonesForLoadBalancerVersionEnum;
}


export class GetDisableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
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


export class GetDisableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisableAvailabilityZonesForLoadBalancerQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisableAvailabilityZonesForLoadBalancerHeaders;
}


export class GetDisableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
