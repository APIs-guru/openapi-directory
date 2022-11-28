import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeletePlatformVersionActionEnum {
    DeletePlatformVersion = "DeletePlatformVersion"
}

export enum GetDeletePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeletePlatformVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeletePlatformVersionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PlatformArn" })
  platformArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeletePlatformVersionVersionEnum;
}


export class GetDeletePlatformVersionHeaders extends SpeakeasyBase {
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


export class GetDeletePlatformVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeletePlatformVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeletePlatformVersionHeaders;
}


export class GetDeletePlatformVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
