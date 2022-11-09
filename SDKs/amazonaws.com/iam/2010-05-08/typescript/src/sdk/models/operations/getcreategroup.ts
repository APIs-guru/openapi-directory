import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateGroupActionEnum {
    CreateGroup = "CreateGroup"
}

export enum GetCreateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreateGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateGroupVersionEnum;
}


export class GetCreateGroupHeaders extends SpeakeasyBase {
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


export class GetCreateGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateGroupQueryParams;

  @Metadata()
  headers: GetCreateGroupHeaders;
}


export class GetCreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
