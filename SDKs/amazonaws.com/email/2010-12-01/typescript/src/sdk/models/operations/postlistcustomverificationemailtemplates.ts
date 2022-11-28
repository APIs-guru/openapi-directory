import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostListCustomVerificationEmailTemplatesActionEnum {
    ListCustomVerificationEmailTemplates = "ListCustomVerificationEmailTemplates"
}

export enum PostListCustomVerificationEmailTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostListCustomVerificationEmailTemplatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListCustomVerificationEmailTemplatesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListCustomVerificationEmailTemplatesVersionEnum;
}


export class PostListCustomVerificationEmailTemplatesHeaders extends SpeakeasyBase {
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


export class PostListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostListCustomVerificationEmailTemplatesQueryParams;

  @SpeakeasyMetadata()
  headers: PostListCustomVerificationEmailTemplatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
