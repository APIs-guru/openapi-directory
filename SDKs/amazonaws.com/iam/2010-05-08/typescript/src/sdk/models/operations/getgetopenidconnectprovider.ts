import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetOpenIdConnectProviderActionEnum {
    GetOpenIdConnectProvider = "GetOpenIDConnectProvider"
}

export enum GetGetOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetOpenIdConnectProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetOpenIdConnectProviderVersionEnum;
}


export class GetGetOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class GetGetOpenIdConnectProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetOpenIdConnectProviderQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetOpenIdConnectProviderHeaders;
}


export class GetGetOpenIdConnectProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
