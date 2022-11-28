import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPutRolePermissionsBoundaryActionEnum {
    PutRolePermissionsBoundary = "PutRolePermissionsBoundary"
}

export enum PostPutRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostPutRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPutRolePermissionsBoundaryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPutRolePermissionsBoundaryVersionEnum;
}


export class PostPutRolePermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class PostPutRolePermissionsBoundaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPutRolePermissionsBoundaryQueryParams;

  @SpeakeasyMetadata()
  headers: PostPutRolePermissionsBoundaryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPutRolePermissionsBoundaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
