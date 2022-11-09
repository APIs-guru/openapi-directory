import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutUserPermissionsBoundaryActionEnum {
    PutUserPermissionsBoundary = "PutUserPermissionsBoundary"
}

export enum GetPutUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetPutUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutUserPermissionsBoundaryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PermissionsBoundary" })
  permissionsBoundary: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutUserPermissionsBoundaryVersionEnum;
}


export class GetPutUserPermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class GetPutUserPermissionsBoundaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutUserPermissionsBoundaryQueryParams;

  @Metadata()
  headers: GetPutUserPermissionsBoundaryHeaders;
}


export class GetPutUserPermissionsBoundaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
