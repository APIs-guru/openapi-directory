import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteLoadBalancerActionEnum {
    DeleteLoadBalancer = "DeleteLoadBalancer"
}

export enum GetDeleteLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDeleteLoadBalancerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLoadBalancerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLoadBalancerVersionEnum;
}


export class GetDeleteLoadBalancerHeaders extends SpeakeasyBase {
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


export class GetDeleteLoadBalancerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteLoadBalancerQueryParams;

  @Metadata()
  headers: GetDeleteLoadBalancerHeaders;
}


export class GetDeleteLoadBalancerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
