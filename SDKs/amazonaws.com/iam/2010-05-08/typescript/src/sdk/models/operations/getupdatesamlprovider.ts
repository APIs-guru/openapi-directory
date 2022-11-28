import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateSamlProviderActionEnum {
    UpdateSamlProvider = "UpdateSAMLProvider"
}

export enum GetUpdateSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateSamlProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateSamlProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SAMLMetadataDocument" })
  samlMetadataDocument: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateSamlProviderVersionEnum;
}


export class GetUpdateSamlProviderHeaders extends SpeakeasyBase {
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


export class GetUpdateSamlProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateSamlProviderQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateSamlProviderHeaders;
}


export class GetUpdateSamlProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
