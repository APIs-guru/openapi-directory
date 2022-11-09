import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateSamlProviderActionEnum {
    UpdateSamlProvider = "UpdateSAMLProvider"
}

export enum GetUpdateSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateSamlProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateSamlProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SAMLMetadataDocument" })
  samlMetadataDocument: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateSamlProviderVersionEnum;
}


export class GetUpdateSamlProviderHeaders extends SpeakeasyBase {
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


export class GetUpdateSamlProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateSamlProviderQueryParams;

  @Metadata()
  headers: GetUpdateSamlProviderHeaders;
}


export class GetUpdateSamlProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
