import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPutUserPermissionsBoundaryActionEnum {
    PutUserPermissionsBoundary = "PutUserPermissionsBoundary"
}

export enum PostPutUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostPutUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPutUserPermissionsBoundaryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPutUserPermissionsBoundaryVersionEnum;
}


export class PostPutUserPermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class PostPutUserPermissionsBoundaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPutUserPermissionsBoundaryQueryParams;

  @SpeakeasyMetadata()
  headers: PostPutUserPermissionsBoundaryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPutUserPermissionsBoundaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
