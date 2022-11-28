import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeLoadBalancerTargetGroupsActionEnum {
    DescribeLoadBalancerTargetGroups = "DescribeLoadBalancerTargetGroups"
}

export enum GetDescribeLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeLoadBalancerTargetGroupsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeLoadBalancerTargetGroupsVersionEnum;
}


export class GetDescribeLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeLoadBalancerTargetGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeLoadBalancerTargetGroupsHeaders;
}


export class GetDescribeLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
