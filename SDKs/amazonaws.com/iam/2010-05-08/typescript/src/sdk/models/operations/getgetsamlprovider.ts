import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetSamlProviderActionEnum {
    GetSamlProvider = "GetSAMLProvider"
}

export enum GetGetSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetSamlProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSamlProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSamlProviderVersionEnum;
}


export class GetGetSamlProviderHeaders extends SpeakeasyBase {
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


export class GetGetSamlProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetSamlProviderQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetSamlProviderHeaders;
}


export class GetGetSamlProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
