import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListSamlProvidersActionEnum {
    ListSamlProviders = "ListSAMLProviders"
}

export enum GetListSamlProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListSamlProvidersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListSamlProvidersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListSamlProvidersVersionEnum;
}


export class GetListSamlProvidersHeaders extends SpeakeasyBase {
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


export class GetListSamlProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListSamlProvidersQueryParams;

  @SpeakeasyMetadata()
  headers: GetListSamlProvidersHeaders;
}


export class GetListSamlProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
