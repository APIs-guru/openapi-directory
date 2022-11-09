import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveClientIdFromOpenIdConnectProviderActionEnum {
    RemoveClientIdFromOpenIdConnectProvider = "RemoveClientIDFromOpenIDConnectProvider"
}

export enum GetRemoveClientIdFromOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetRemoveClientIdFromOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveClientIdFromOpenIdConnectProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveClientIdFromOpenIdConnectProviderVersionEnum;
}


export class GetRemoveClientIdFromOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class GetRemoveClientIdFromOpenIdConnectProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveClientIdFromOpenIdConnectProviderQueryParams;

  @Metadata()
  headers: GetRemoveClientIdFromOpenIdConnectProviderHeaders;
}


export class GetRemoveClientIdFromOpenIdConnectProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
