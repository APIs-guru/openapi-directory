import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListSamlProviderTagsActionEnum {
    ListSamlProviderTags = "ListSAMLProviderTags"
}

export enum PostListSamlProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostListSamlProviderTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListSamlProviderTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListSamlProviderTagsVersionEnum;
}


export class PostListSamlProviderTagsHeaders extends SpeakeasyBase {
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


export class PostListSamlProviderTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListSamlProviderTagsQueryParams;

  @Metadata()
  headers: PostListSamlProviderTagsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListSamlProviderTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
