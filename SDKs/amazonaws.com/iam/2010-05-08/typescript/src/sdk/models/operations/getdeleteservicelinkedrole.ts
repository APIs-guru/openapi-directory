import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteServiceLinkedRoleActionEnum {
    DeleteServiceLinkedRole = "DeleteServiceLinkedRole"
}

export enum GetDeleteServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteServiceLinkedRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteServiceLinkedRoleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteServiceLinkedRoleVersionEnum;
}


export class GetDeleteServiceLinkedRoleHeaders extends SpeakeasyBase {
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


export class GetDeleteServiceLinkedRoleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteServiceLinkedRoleQueryParams;

  @Metadata()
  headers: GetDeleteServiceLinkedRoleHeaders;
}


export class GetDeleteServiceLinkedRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
