import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostListOpenIdConnectProviderTagsActionEnum {
    ListOpenIdConnectProviderTags = "ListOpenIDConnectProviderTags"
}

export enum PostListOpenIdConnectProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostListOpenIdConnectProviderTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListOpenIdConnectProviderTagsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListOpenIdConnectProviderTagsVersionEnum;
}


export class PostListOpenIdConnectProviderTagsHeaders extends SpeakeasyBase {
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


export class PostListOpenIdConnectProviderTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostListOpenIdConnectProviderTagsQueryParams;

  @SpeakeasyMetadata()
  headers: PostListOpenIdConnectProviderTagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListOpenIdConnectProviderTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
