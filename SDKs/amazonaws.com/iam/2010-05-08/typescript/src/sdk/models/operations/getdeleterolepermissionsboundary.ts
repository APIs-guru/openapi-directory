import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteRolePermissionsBoundaryActionEnum {
    DeleteRolePermissionsBoundary = "DeleteRolePermissionsBoundary"
}

export enum GetDeleteRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteRolePermissionsBoundaryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteRolePermissionsBoundaryVersionEnum;
}


export class GetDeleteRolePermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class GetDeleteRolePermissionsBoundaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteRolePermissionsBoundaryQueryParams;

  @Metadata()
  headers: GetDeleteRolePermissionsBoundaryHeaders;
}


export class GetDeleteRolePermissionsBoundaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
