import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyUserGroupActionEnum {
    ModifyUserGroup = "ModifyUserGroup"
}

export enum GetModifyUserGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyUserGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyUserGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserGroupId" })
  userGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserIdsToAdd" })
  userIdsToAdd?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserIdsToRemove" })
  userIdsToRemove?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyUserGroupVersionEnum;
}


export class GetModifyUserGroupHeaders extends SpeakeasyBase {
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


export class GetModifyUserGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyUserGroupQueryParams;

  @Metadata()
  headers: GetModifyUserGroupHeaders;
}


export class GetModifyUserGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
