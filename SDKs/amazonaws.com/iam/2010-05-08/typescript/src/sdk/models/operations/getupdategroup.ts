import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateGroupActionEnum {
    UpdateGroup = "UpdateGroup"
}

export enum GetUpdateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewGroupName" })
  newGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewPath" })
  newPath?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateGroupVersionEnum;
}


export class GetUpdateGroupHeaders extends SpeakeasyBase {
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


export class GetUpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateGroupHeaders;
}


export class GetUpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
