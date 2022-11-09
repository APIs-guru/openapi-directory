import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUntagSamlProviderActionEnum {
    UntagSamlProvider = "UntagSAMLProvider"
}

export enum GetUntagSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUntagSamlProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagSamlProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagSamlProviderVersionEnum;
}


export class GetUntagSamlProviderHeaders extends SpeakeasyBase {
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


export class GetUntagSamlProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUntagSamlProviderQueryParams;

  @Metadata()
  headers: GetUntagSamlProviderHeaders;
}


export class GetUntagSamlProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
