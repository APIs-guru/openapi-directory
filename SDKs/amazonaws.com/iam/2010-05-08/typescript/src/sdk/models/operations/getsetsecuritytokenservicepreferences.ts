import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetSecurityTokenServicePreferencesActionEnum {
    SetSecurityTokenServicePreferences = "SetSecurityTokenServicePreferences"
}

export enum GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum {
    V1Token = "v1Token"
,    V2Token = "v2Token"
}

export enum GetSetSecurityTokenServicePreferencesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetSetSecurityTokenServicePreferencesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetSecurityTokenServicePreferencesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalEndpointTokenVersion" })
  globalEndpointTokenVersion: GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetSecurityTokenServicePreferencesVersionEnum;
}


export class GetSetSecurityTokenServicePreferencesHeaders extends SpeakeasyBase {
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


export class GetSetSecurityTokenServicePreferencesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetSecurityTokenServicePreferencesQueryParams;

  @Metadata()
  headers: GetSetSecurityTokenServicePreferencesHeaders;
}


export class GetSetSecurityTokenServicePreferencesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
