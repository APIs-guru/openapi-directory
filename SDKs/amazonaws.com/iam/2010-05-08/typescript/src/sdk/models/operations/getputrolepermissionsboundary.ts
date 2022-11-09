import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutRolePermissionsBoundaryActionEnum {
    PutRolePermissionsBoundary = "PutRolePermissionsBoundary"
}

export enum GetPutRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetPutRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutRolePermissionsBoundaryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PermissionsBoundary" })
  permissionsBoundary: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutRolePermissionsBoundaryVersionEnum;
}


export class GetPutRolePermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class GetPutRolePermissionsBoundaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutRolePermissionsBoundaryQueryParams;

  @Metadata()
  headers: GetPutRolePermissionsBoundaryHeaders;
}


export class GetPutRolePermissionsBoundaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
