import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDetachLoadBalancerFromSubnetsActionEnum {
    DetachLoadBalancerFromSubnets = "DetachLoadBalancerFromSubnets"
}

export enum GetDetachLoadBalancerFromSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDetachLoadBalancerFromSubnetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachLoadBalancerFromSubnetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Subnets" })
  subnets: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachLoadBalancerFromSubnetsVersionEnum;
}


export class GetDetachLoadBalancerFromSubnetsHeaders extends SpeakeasyBase {
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


export class GetDetachLoadBalancerFromSubnetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDetachLoadBalancerFromSubnetsQueryParams;

  @Metadata()
  headers: GetDetachLoadBalancerFromSubnetsHeaders;
}


export class GetDetachLoadBalancerFromSubnetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
