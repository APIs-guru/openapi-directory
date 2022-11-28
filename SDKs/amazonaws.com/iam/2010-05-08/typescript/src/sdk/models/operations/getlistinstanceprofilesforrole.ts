import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListInstanceProfilesForRoleActionEnum {
    ListInstanceProfilesForRole = "ListInstanceProfilesForRole"
}

export enum GetListInstanceProfilesForRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListInstanceProfilesForRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListInstanceProfilesForRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" })
  roleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListInstanceProfilesForRoleVersionEnum;
}


export class GetListInstanceProfilesForRoleHeaders extends SpeakeasyBase {
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


export class GetListInstanceProfilesForRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListInstanceProfilesForRoleQueryParams;

  @SpeakeasyMetadata()
  headers: GetListInstanceProfilesForRoleHeaders;
}


export class GetListInstanceProfilesForRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
