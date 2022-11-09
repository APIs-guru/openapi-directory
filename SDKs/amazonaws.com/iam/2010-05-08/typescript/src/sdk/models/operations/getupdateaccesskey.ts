import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateAccessKeyActionEnum {
    UpdateAccessKey = "UpdateAccessKey"
}

export enum GetUpdateAccessKeyStatusEnum {
    Active = "Active"
,    Inactive = "Inactive"
}

export enum GetUpdateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateAccessKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" })
  accessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAccessKeyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdateAccessKeyStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAccessKeyVersionEnum;
}


export class GetUpdateAccessKeyHeaders extends SpeakeasyBase {
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


export class GetUpdateAccessKeyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateAccessKeyQueryParams;

  @Metadata()
  headers: GetUpdateAccessKeyHeaders;
}


export class GetUpdateAccessKeyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
