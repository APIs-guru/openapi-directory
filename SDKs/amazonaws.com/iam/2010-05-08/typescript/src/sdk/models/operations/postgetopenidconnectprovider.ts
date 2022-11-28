import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetOpenIdConnectProviderActionEnum {
    GetOpenIdConnectProvider = "GetOpenIDConnectProvider"
}

export enum PostGetOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetOpenIdConnectProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetOpenIdConnectProviderVersionEnum;
}


export class PostGetOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class PostGetOpenIdConnectProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetOpenIdConnectProviderQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetOpenIdConnectProviderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetOpenIdConnectProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
