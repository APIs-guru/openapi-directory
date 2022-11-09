import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAttachLoadBalancerToSubnetsActionEnum {
    AttachLoadBalancerToSubnets = "AttachLoadBalancerToSubnets"
}

export enum GetAttachLoadBalancerToSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetAttachLoadBalancerToSubnetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachLoadBalancerToSubnetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Subnets" })
  subnets: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachLoadBalancerToSubnetsVersionEnum;
}


export class GetAttachLoadBalancerToSubnetsHeaders extends SpeakeasyBase {
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


export class GetAttachLoadBalancerToSubnetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttachLoadBalancerToSubnetsQueryParams;

  @Metadata()
  headers: GetAttachLoadBalancerToSubnetsHeaders;
}


export class GetAttachLoadBalancerToSubnetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
