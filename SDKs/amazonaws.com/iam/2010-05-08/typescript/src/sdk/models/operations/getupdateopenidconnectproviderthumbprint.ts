import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateOpenIdConnectProviderThumbprintActionEnum {
    UpdateOpenIdConnectProviderThumbprint = "UpdateOpenIDConnectProviderThumbprint"
}

export enum GetUpdateOpenIdConnectProviderThumbprintVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateOpenIdConnectProviderThumbprintQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateOpenIdConnectProviderThumbprintActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ThumbprintList" })
  thumbprintList: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateOpenIdConnectProviderThumbprintVersionEnum;
}


export class GetUpdateOpenIdConnectProviderThumbprintHeaders extends SpeakeasyBase {
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


export class GetUpdateOpenIdConnectProviderThumbprintRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateOpenIdConnectProviderThumbprintQueryParams;

  @Metadata()
  headers: GetUpdateOpenIdConnectProviderThumbprintHeaders;
}


export class GetUpdateOpenIdConnectProviderThumbprintResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
