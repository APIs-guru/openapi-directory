import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListCustomVerificationEmailTemplatesActionEnum {
    ListCustomVerificationEmailTemplates = "ListCustomVerificationEmailTemplates"
}

export enum PostListCustomVerificationEmailTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostListCustomVerificationEmailTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListCustomVerificationEmailTemplatesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListCustomVerificationEmailTemplatesVersionEnum;
}


export class PostListCustomVerificationEmailTemplatesHeaders extends SpeakeasyBase {
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


export class PostListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListCustomVerificationEmailTemplatesQueryParams;

  @Metadata()
  headers: PostListCustomVerificationEmailTemplatesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
