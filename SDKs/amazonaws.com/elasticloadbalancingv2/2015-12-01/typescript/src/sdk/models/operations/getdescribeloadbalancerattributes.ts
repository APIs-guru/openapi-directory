import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeLoadBalancerAttributesActionEnum {
    DescribeLoadBalancerAttributes = "DescribeLoadBalancerAttributes"
}

export enum GetDescribeLoadBalancerAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDescribeLoadBalancerAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeLoadBalancerAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" })
  loadBalancerArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeLoadBalancerAttributesVersionEnum;
}


export class GetDescribeLoadBalancerAttributesHeaders extends SpeakeasyBase {
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


export class GetDescribeLoadBalancerAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeLoadBalancerAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeLoadBalancerAttributesHeaders;
}


export class GetDescribeLoadBalancerAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
