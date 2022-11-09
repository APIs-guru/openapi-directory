import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetOpenIdConnectProviderActionEnum {
    GetOpenIdConnectProvider = "GetOpenIDConnectProvider"
}

export enum GetGetOpenIdConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetOpenIdConnectProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetOpenIdConnectProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" })
  openIdConnectProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetOpenIdConnectProviderVersionEnum;
}


export class GetGetOpenIdConnectProviderHeaders extends SpeakeasyBase {
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


export class GetGetOpenIdConnectProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetOpenIdConnectProviderQueryParams;

  @Metadata()
  headers: GetGetOpenIdConnectProviderHeaders;
}


export class GetGetOpenIdConnectProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
