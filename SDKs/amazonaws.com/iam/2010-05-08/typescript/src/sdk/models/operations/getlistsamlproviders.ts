import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListSamlProvidersActionEnum {
    ListSamlProviders = "ListSAMLProviders"
}

export enum GetListSamlProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListSamlProvidersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListSamlProvidersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListSamlProvidersVersionEnum;
}


export class GetListSamlProvidersHeaders extends SpeakeasyBase {
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


export class GetListSamlProvidersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListSamlProvidersQueryParams;

  @Metadata()
  headers: GetListSamlProvidersHeaders;
}


export class GetListSamlProvidersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
