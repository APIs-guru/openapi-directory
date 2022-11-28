import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListOpenIdConnectProvidersActionEnum {
    ListOpenIdConnectProviders = "ListOpenIDConnectProviders"
}

export enum GetListOpenIdConnectProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListOpenIdConnectProvidersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListOpenIdConnectProvidersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListOpenIdConnectProvidersVersionEnum;
}


export class GetListOpenIdConnectProvidersHeaders extends SpeakeasyBase {
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


export class GetListOpenIdConnectProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListOpenIdConnectProvidersQueryParams;

  @SpeakeasyMetadata()
  headers: GetListOpenIdConnectProvidersHeaders;
}


export class GetListOpenIdConnectProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
