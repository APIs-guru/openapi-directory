import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteRolePermissionsBoundaryActionEnum {
    DeleteRolePermissionsBoundary = "DeleteRolePermissionsBoundary"
}

export enum GetDeleteRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteRolePermissionsBoundaryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteRolePermissionsBoundaryVersionEnum;
}


export class GetDeleteRolePermissionsBoundaryHeaders extends SpeakeasyBase {
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


export class GetDeleteRolePermissionsBoundaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteRolePermissionsBoundaryQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteRolePermissionsBoundaryHeaders;
}


export class GetDeleteRolePermissionsBoundaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
