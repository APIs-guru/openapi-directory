import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAttachLoadBalancerToSubnetsActionEnum {
    AttachLoadBalancerToSubnets = "AttachLoadBalancerToSubnets"
}

export enum GetAttachLoadBalancerToSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetAttachLoadBalancerToSubnetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachLoadBalancerToSubnetsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Subnets" })
  subnets: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachLoadBalancerToSubnetsVersionEnum;
}


export class GetAttachLoadBalancerToSubnetsHeaders extends SpeakeasyBase {
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


export class GetAttachLoadBalancerToSubnetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAttachLoadBalancerToSubnetsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAttachLoadBalancerToSubnetsHeaders;
}


export class GetAttachLoadBalancerToSubnetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
