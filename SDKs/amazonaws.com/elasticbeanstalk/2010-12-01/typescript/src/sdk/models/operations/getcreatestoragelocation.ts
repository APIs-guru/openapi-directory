import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateStorageLocationActionEnum {
    CreateStorageLocation = "CreateStorageLocation"
}

export enum GetCreateStorageLocationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateStorageLocationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateStorageLocationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateStorageLocationVersionEnum;
}


export class GetCreateStorageLocationHeaders extends SpeakeasyBase {
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


export class GetCreateStorageLocationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateStorageLocationQueryParams;

  @Metadata()
  headers: GetCreateStorageLocationHeaders;
}


export class GetCreateStorageLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
