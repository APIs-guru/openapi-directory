import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeInstanceRefreshesActionEnum {
    DescribeInstanceRefreshes = "DescribeInstanceRefreshes"
}

export enum GetDescribeInstanceRefreshesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeInstanceRefreshesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeInstanceRefreshesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceRefreshIds" })
  instanceRefreshIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeInstanceRefreshesVersionEnum;
}


export class GetDescribeInstanceRefreshesHeaders extends SpeakeasyBase {
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


export class GetDescribeInstanceRefreshesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeInstanceRefreshesQueryParams;

  @Metadata()
  headers: GetDescribeInstanceRefreshesHeaders;
}


export class GetDescribeInstanceRefreshesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
