import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetAccessKeyLastUsedActionEnum {
    GetAccessKeyLastUsed = "GetAccessKeyLastUsed"
}

export enum PostGetAccessKeyLastUsedVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetAccessKeyLastUsedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAccessKeyLastUsedActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAccessKeyLastUsedVersionEnum;
}


export class PostGetAccessKeyLastUsedHeaders extends SpeakeasyBase {
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


export class PostGetAccessKeyLastUsedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetAccessKeyLastUsedQueryParams;

  @Metadata()
  headers: PostGetAccessKeyLastUsedHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetAccessKeyLastUsedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
