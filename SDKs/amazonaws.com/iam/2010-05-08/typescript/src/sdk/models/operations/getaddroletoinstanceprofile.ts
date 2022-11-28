import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAddRoleToInstanceProfileActionEnum {
    AddRoleToInstanceProfile = "AddRoleToInstanceProfile"
}

export enum GetAddRoleToInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetAddRoleToInstanceProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddRoleToInstanceProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" })
  instanceProfileName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddRoleToInstanceProfileVersionEnum;
}


export class GetAddRoleToInstanceProfileHeaders extends SpeakeasyBase {
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


export class GetAddRoleToInstanceProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAddRoleToInstanceProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetAddRoleToInstanceProfileHeaders;
}


export class GetAddRoleToInstanceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
