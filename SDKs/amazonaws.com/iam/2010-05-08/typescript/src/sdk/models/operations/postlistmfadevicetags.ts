import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListMfaDeviceTagsActionEnum {
    ListMfaDeviceTags = "ListMFADeviceTags"
}

export enum PostListMfaDeviceTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostListMfaDeviceTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListMfaDeviceTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListMfaDeviceTagsVersionEnum;
}


export class PostListMfaDeviceTagsHeaders extends SpeakeasyBase {
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


export class PostListMfaDeviceTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListMfaDeviceTagsQueryParams;

  @Metadata()
  headers: PostListMfaDeviceTagsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListMfaDeviceTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
