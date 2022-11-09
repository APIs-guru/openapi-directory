import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListSamlProviderTagsActionEnum {
    ListSamlProviderTags = "ListSAMLProviderTags"
}

export enum GetListSamlProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListSamlProviderTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListSamlProviderTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" })
  samlProviderArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListSamlProviderTagsVersionEnum;
}


export class GetListSamlProviderTagsHeaders extends SpeakeasyBase {
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


export class GetListSamlProviderTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListSamlProviderTagsQueryParams;

  @Metadata()
  headers: GetListSamlProviderTagsHeaders;
}


export class GetListSamlProviderTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
