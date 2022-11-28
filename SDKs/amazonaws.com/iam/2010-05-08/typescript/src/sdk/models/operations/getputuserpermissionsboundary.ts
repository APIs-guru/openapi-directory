import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutUserPermissionsBoundaryActionEnum {
    PutUserPermissionsBoundary = "PutUserPermissionsBoundary"
}

export enum GetPutUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetPutUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutUserPermissionsBoundaryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PermissionsBoundary" })
  permissionsBoundary: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutUserPermissionsBoundaryVersionEnum;
}


export class GetPutUserPermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class GetPutUserPermissionsBoundaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutUserPermissionsBoundaryQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutUserPermissionsBoundaryHeaders;
}


export class GetPutUserPermissionsBoundaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
