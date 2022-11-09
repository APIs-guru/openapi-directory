import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateGroupActionEnum {
    UpdateGroup = "UpdateGroup"
}

export enum GetUpdateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewGroupName" })
  newGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewPath" })
  newPath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateGroupVersionEnum;
}


export class GetUpdateGroupHeaders extends SpeakeasyBase {
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


export class GetUpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateGroupQueryParams;

  @Metadata()
  headers: GetUpdateGroupHeaders;
}


export class GetUpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
