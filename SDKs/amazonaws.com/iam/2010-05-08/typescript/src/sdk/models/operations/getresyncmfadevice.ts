import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetResyncMfaDeviceActionEnum {
    ResyncMfaDevice = "ResyncMFADevice"
}

export enum GetResyncMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetResyncMfaDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResyncMfaDeviceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode1" })
  authenticationCode1: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode2" })
  authenticationCode2: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResyncMfaDeviceVersionEnum;
}


export class GetResyncMfaDeviceHeaders extends SpeakeasyBase {
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


export class GetResyncMfaDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResyncMfaDeviceQueryParams;

  @SpeakeasyMetadata()
  headers: GetResyncMfaDeviceHeaders;
}


export class GetResyncMfaDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
