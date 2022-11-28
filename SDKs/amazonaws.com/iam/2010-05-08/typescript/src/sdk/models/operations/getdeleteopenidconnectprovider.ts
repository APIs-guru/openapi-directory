import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteOpenIdConnectProviderActionEnum {
    DeleteOpenIdConnectProvider = "DeleteOpenIDConnectProvider"
}

export enum GetDeleteOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteOpenIdConnectProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteOpenIdConnectProviderVersionEnum;
}


export class GetDeleteOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class GetDeleteOpenIdConnectProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteOpenIdConnectProviderQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteOpenIdConnectProviderHeaders;
}


export class GetDeleteOpenIdConnectProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
