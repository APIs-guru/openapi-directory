import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeTagsActionEnum {
    DescribeTags = "DescribeTags"
}

export enum GetDescribeTagsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetDescribeTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerNames" })
  loadBalancerNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeTagsVersionEnum;
}


export class GetDescribeTagsHeaders extends SpeakeasyBase {
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


export class GetDescribeTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeTagsQueryParams;

  @Metadata()
  headers: GetDescribeTagsHeaders;
}


export class GetDescribeTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
