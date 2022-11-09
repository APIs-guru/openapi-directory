import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeLoadBalancerPolicyTypesActionEnum {
    DescribeLoadBalancerPolicyTypes = "DescribeLoadBalancerPolicyTypes"
}

export enum GetDescribeLoadBalancerPolicyTypesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDescribeLoadBalancerPolicyTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeLoadBalancerPolicyTypesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyTypeNames" })
  policyTypeNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeLoadBalancerPolicyTypesVersionEnum;
}


export class GetDescribeLoadBalancerPolicyTypesHeaders extends SpeakeasyBase {
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


export class GetDescribeLoadBalancerPolicyTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeLoadBalancerPolicyTypesQueryParams;

  @Metadata()
  headers: GetDescribeLoadBalancerPolicyTypesHeaders;
}


export class GetDescribeLoadBalancerPolicyTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
