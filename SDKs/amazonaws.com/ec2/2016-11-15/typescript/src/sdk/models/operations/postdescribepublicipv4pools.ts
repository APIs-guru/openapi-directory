import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribePublicIpv4PoolsActionEnum {
    DescribePublicIpv4Pools = "DescribePublicIpv4Pools"
}

export enum PostDescribePublicIpv4PoolsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDescribePublicIpv4PoolsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribePublicIpv4PoolsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribePublicIpv4PoolsVersionEnum;
}


export class PostDescribePublicIpv4PoolsHeaders extends SpeakeasyBase {
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


export class PostDescribePublicIpv4PoolsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribePublicIpv4PoolsQueryParams;

  @Metadata()
  headers: PostDescribePublicIpv4PoolsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribePublicIpv4PoolsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
