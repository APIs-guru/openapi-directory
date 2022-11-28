import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateAccessKeyActionEnum {
    UpdateAccessKey = "UpdateAccessKey"
}

export enum GetUpdateAccessKeyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}

export enum GetUpdateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateAccessKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" })
  accessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAccessKeyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdateAccessKeyStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAccessKeyVersionEnum;
}


export class GetUpdateAccessKeyHeaders extends SpeakeasyBase {
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


export class GetUpdateAccessKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateAccessKeyQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateAccessKeyHeaders;
}


export class GetUpdateAccessKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
