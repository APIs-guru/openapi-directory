import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveUserFromGroupActionEnum {
    RemoveUserFromGroup = "RemoveUserFromGroup"
}

export enum GetRemoveUserFromGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetRemoveUserFromGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveUserFromGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveUserFromGroupVersionEnum;
}


export class GetRemoveUserFromGroupHeaders extends SpeakeasyBase {
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


export class GetRemoveUserFromGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveUserFromGroupQueryParams;

  @Metadata()
  headers: GetRemoveUserFromGroupHeaders;
}


export class GetRemoveUserFromGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
