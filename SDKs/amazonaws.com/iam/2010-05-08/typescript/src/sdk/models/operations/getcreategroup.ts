import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateGroupActionEnum {
    CreateGroup = "CreateGroup"
}

export enum GetCreateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreateGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateGroupVersionEnum;
}


export class GetCreateGroupHeaders extends SpeakeasyBase {
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


export class GetCreateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateGroupHeaders;
}


export class GetCreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
