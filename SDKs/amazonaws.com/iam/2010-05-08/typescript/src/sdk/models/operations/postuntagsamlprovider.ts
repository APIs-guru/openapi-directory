import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostUntagSamlProviderActionEnum {
    UntagSamlProvider = "UntagSAMLProvider"
}

export enum PostUntagSamlProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostUntagSamlProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUntagSamlProviderActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUntagSamlProviderVersionEnum;
}


export class PostUntagSamlProviderHeaders extends SpeakeasyBase {
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


export class PostUntagSamlProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUntagSamlProviderQueryParams;

  @Metadata()
  headers: PostUntagSamlProviderHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUntagSamlProviderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
