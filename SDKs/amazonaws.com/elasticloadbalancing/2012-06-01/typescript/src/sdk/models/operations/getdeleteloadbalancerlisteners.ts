import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteLoadBalancerListenersActionEnum {
    DeleteLoadBalancerListeners = "DeleteLoadBalancerListeners"
}

export enum GetDeleteLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDeleteLoadBalancerListenersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLoadBalancerListenersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPorts" })
  loadBalancerPorts: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLoadBalancerListenersVersionEnum;
}


export class GetDeleteLoadBalancerListenersHeaders extends SpeakeasyBase {
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


export class GetDeleteLoadBalancerListenersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteLoadBalancerListenersQueryParams;

  @Metadata()
  headers: GetDeleteLoadBalancerListenersHeaders;
}


export class GetDeleteLoadBalancerListenersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
