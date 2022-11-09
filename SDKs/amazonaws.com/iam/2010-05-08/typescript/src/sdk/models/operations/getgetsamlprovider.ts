import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetSamlProviderActionEnum {
    GetSamlProvider = "GetSAMLProvider"
}

export enum GetGetSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetSamlProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSamlProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSamlProviderVersionEnum;
}


export class GetGetSamlProviderHeaders extends SpeakeasyBase {
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


export class GetGetSamlProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetSamlProviderQueryParams;

  @Metadata()
  headers: GetGetSamlProviderHeaders;
}


export class GetGetSamlProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
