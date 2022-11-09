import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUntagRoleActionEnum {
    UntagRole = "UntagRole"
}

export enum GetUntagRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUntagRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagRoleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagRoleVersionEnum;
}


export class GetUntagRoleHeaders extends SpeakeasyBase {
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


export class GetUntagRoleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUntagRoleQueryParams;

  @Metadata()
  headers: GetUntagRoleHeaders;
}


export class GetUntagRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
