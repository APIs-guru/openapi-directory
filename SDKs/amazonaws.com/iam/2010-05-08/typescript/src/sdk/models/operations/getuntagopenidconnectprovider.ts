import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUntagOpenIdConnectProviderActionEnum {
    UntagOpenIdConnectProvider = "UntagOpenIDConnectProvider"
}

export enum GetUntagOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUntagOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagOpenIdConnectProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagOpenIdConnectProviderVersionEnum;
}


export class GetUntagOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class GetUntagOpenIdConnectProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUntagOpenIdConnectProviderQueryParams;

  @SpeakeasyMetadata()
  headers: GetUntagOpenIdConnectProviderHeaders;
}


export class GetUntagOpenIdConnectProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
