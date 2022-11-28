import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetAccessKeyLastUsedActionEnum {
    GetAccessKeyLastUsed = "GetAccessKeyLastUsed"
}

export enum GetGetAccessKeyLastUsedVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetAccessKeyLastUsedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" })
  accessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccessKeyLastUsedActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccessKeyLastUsedVersionEnum;
}


export class GetGetAccessKeyLastUsedHeaders extends SpeakeasyBase {
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


export class GetGetAccessKeyLastUsedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetAccessKeyLastUsedQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetAccessKeyLastUsedHeaders;
}


export class GetGetAccessKeyLastUsedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
