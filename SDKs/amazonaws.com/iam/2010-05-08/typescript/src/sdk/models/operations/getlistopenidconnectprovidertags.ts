import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListOpenIdConnectProviderTagsActionEnum {
    ListOpenIdConnectProviderTags = "ListOpenIDConnectProviderTags"
}

export enum GetListOpenIdConnectProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListOpenIdConnectProviderTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListOpenIdConnectProviderTagsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListOpenIdConnectProviderTagsVersionEnum;
}


export class GetListOpenIdConnectProviderTagsHeaders extends SpeakeasyBase {
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


export class GetListOpenIdConnectProviderTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListOpenIdConnectProviderTagsQueryParams;

  @SpeakeasyMetadata()
  headers: GetListOpenIdConnectProviderTagsHeaders;
}


export class GetListOpenIdConnectProviderTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
