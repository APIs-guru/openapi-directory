import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAbortEnvironmentUpdateActionEnum {
    AbortEnvironmentUpdate = "AbortEnvironmentUpdate"
}

export enum PostAbortEnvironmentUpdateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostAbortEnvironmentUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAbortEnvironmentUpdateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAbortEnvironmentUpdateVersionEnum;
}


export class PostAbortEnvironmentUpdateHeaders extends SpeakeasyBase {
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


export class PostAbortEnvironmentUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAbortEnvironmentUpdateQueryParams;

  @SpeakeasyMetadata()
  headers: PostAbortEnvironmentUpdateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAbortEnvironmentUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
