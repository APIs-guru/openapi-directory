import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyUserGroupActionEnum {
    ModifyUserGroup = "ModifyUserGroup"
}

export enum GetModifyUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyUserGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyUserGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserGroupId" })
  userGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserIdsToAdd" })
  userIdsToAdd?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserIdsToRemove" })
  userIdsToRemove?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyUserGroupVersionEnum;
}


export class GetModifyUserGroupHeaders extends SpeakeasyBase {
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


export class GetModifyUserGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyUserGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyUserGroupHeaders;
}


export class GetModifyUserGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
