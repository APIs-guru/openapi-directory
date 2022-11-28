import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUntagSamlProviderActionEnum {
    UntagSamlProvider = "UntagSAMLProvider"
}

export enum GetUntagSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUntagSamlProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagSamlProviderActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagSamlProviderVersionEnum;
}


export class GetUntagSamlProviderHeaders extends SpeakeasyBase {
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


export class GetUntagSamlProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUntagSamlProviderQueryParams;

  @SpeakeasyMetadata()
  headers: GetUntagSamlProviderHeaders;
}


export class GetUntagSamlProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
