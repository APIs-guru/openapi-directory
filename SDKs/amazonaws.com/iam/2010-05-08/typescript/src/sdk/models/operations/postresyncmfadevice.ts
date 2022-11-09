import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostResyncMfaDeviceActionEnum {
    ResyncMfaDevice = "ResyncMFADevice"
}

export enum PostResyncMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostResyncMfaDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostResyncMfaDeviceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostResyncMfaDeviceVersionEnum;
}


export class PostResyncMfaDeviceHeaders extends SpeakeasyBase {
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


export class PostResyncMfaDeviceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostResyncMfaDeviceQueryParams;

  @Metadata()
  headers: PostResyncMfaDeviceHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostResyncMfaDeviceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
