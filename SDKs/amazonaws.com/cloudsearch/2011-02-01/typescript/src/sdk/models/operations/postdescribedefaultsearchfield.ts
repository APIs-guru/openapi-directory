import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeDefaultSearchFieldActionEnum {
    DescribeDefaultSearchField = "DescribeDefaultSearchField"
}

export enum PostDescribeDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class PostDescribeDefaultSearchFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeDefaultSearchFieldActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeDefaultSearchFieldVersionEnum;
}


export class PostDescribeDefaultSearchFieldHeaders extends SpeakeasyBase {
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


export class PostDescribeDefaultSearchFieldRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeDefaultSearchFieldQueryParams;

  @Metadata()
  headers: PostDescribeDefaultSearchFieldHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeDefaultSearchFieldResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
