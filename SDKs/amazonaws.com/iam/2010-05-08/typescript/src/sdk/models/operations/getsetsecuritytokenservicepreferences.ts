import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetSecurityTokenServicePreferencesActionEnum {
    SetSecurityTokenServicePreferences = "SetSecurityTokenServicePreferences"
}

export enum GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum {
    V1Token = "v1Token",
    V2Token = "v2Token"
}

export enum GetSetSecurityTokenServicePreferencesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetSetSecurityTokenServicePreferencesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetSecurityTokenServicePreferencesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalEndpointTokenVersion" })
  globalEndpointTokenVersion: GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetSecurityTokenServicePreferencesVersionEnum;
}


export class GetSetSecurityTokenServicePreferencesHeaders extends SpeakeasyBase {
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


export class GetSetSecurityTokenServicePreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetSecurityTokenServicePreferencesQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetSecurityTokenServicePreferencesHeaders;
}


export class GetSetSecurityTokenServicePreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
