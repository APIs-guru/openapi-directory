import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeStopwordOptionsActionEnum {
    DescribeStopwordOptions = "DescribeStopwordOptions"
}

export enum PostDescribeStopwordOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class PostDescribeStopwordOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeStopwordOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeStopwordOptionsVersionEnum;
}


export class PostDescribeStopwordOptionsHeaders extends SpeakeasyBase {
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


export class PostDescribeStopwordOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeStopwordOptionsQueryParams;

  @Metadata()
  headers: PostDescribeStopwordOptionsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeStopwordOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
