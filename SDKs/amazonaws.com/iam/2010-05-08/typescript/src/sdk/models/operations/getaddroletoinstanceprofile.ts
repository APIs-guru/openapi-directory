import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAddRoleToInstanceProfileActionEnum {
    AddRoleToInstanceProfile = "AddRoleToInstanceProfile"
}

export enum GetAddRoleToInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetAddRoleToInstanceProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddRoleToInstanceProfileActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" })
  instanceProfileName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddRoleToInstanceProfileVersionEnum;
}


export class GetAddRoleToInstanceProfileHeaders extends SpeakeasyBase {
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


export class GetAddRoleToInstanceProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAddRoleToInstanceProfileQueryParams;

  @Metadata()
  headers: GetAddRoleToInstanceProfileHeaders;
}


export class GetAddRoleToInstanceProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
