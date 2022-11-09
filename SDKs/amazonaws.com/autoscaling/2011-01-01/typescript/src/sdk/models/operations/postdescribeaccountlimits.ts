import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeAccountLimitsActionEnum {
    DescribeAccountLimits = "DescribeAccountLimits"
}

export enum PostDescribeAccountLimitsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostDescribeAccountLimitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeAccountLimitsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeAccountLimitsVersionEnum;
}


export class PostDescribeAccountLimitsHeaders extends SpeakeasyBase {
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


export class PostDescribeAccountLimitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeAccountLimitsQueryParams;

  @Metadata()
  headers: PostDescribeAccountLimitsHeaders;
}


export class PostDescribeAccountLimitsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
