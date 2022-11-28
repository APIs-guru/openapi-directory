import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateOpenIdConnectProviderThumbprintActionEnum {
    UpdateOpenIdConnectProviderThumbprint = "UpdateOpenIDConnectProviderThumbprint"
}

export enum GetUpdateOpenIdConnectProviderThumbprintVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateOpenIdConnectProviderThumbprintQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateOpenIdConnectProviderThumbprintActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ThumbprintList" })
  thumbprintList: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateOpenIdConnectProviderThumbprintVersionEnum;
}


export class GetUpdateOpenIdConnectProviderThumbprintHeaders extends SpeakeasyBase {
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


export class GetUpdateOpenIdConnectProviderThumbprintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateOpenIdConnectProviderThumbprintQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateOpenIdConnectProviderThumbprintHeaders;
}


export class GetUpdateOpenIdConnectProviderThumbprintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
