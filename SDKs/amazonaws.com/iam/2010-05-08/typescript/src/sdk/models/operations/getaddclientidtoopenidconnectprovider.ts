import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAddClientIdToOpenIdConnectProviderActionEnum {
    AddClientIdToOpenIdConnectProvider = "AddClientIDToOpenIDConnectProvider"
}

export enum GetAddClientIdToOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetAddClientIdToOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddClientIdToOpenIdConnectProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddClientIdToOpenIdConnectProviderVersionEnum;
}


export class GetAddClientIdToOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class GetAddClientIdToOpenIdConnectProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAddClientIdToOpenIdConnectProviderQueryParams;

  @Metadata()
  headers: GetAddClientIdToOpenIdConnectProviderHeaders;
}


export class GetAddClientIdToOpenIdConnectProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
