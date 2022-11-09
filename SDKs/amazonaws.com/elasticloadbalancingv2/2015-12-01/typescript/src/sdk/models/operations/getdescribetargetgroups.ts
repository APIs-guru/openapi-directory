import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeTargetGroupsActionEnum {
    DescribeTargetGroups = "DescribeTargetGroups"
}

export enum GetDescribeTargetGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDescribeTargetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeTargetGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" })
  loadBalancerArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Names" })
  names?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArns" })
  targetGroupArns?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeTargetGroupsVersionEnum;
}


export class GetDescribeTargetGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeTargetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeTargetGroupsQueryParams;

  @Metadata()
  headers: GetDescribeTargetGroupsHeaders;
}


export class GetDescribeTargetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
