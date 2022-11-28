import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEnableMfaDeviceActionEnum {
    EnableMfaDevice = "EnableMFADevice"
}

export enum GetEnableMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetEnableMfaDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableMfaDeviceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode1" })
  authenticationCode1: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode2" })
  authenticationCode2: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableMfaDeviceVersionEnum;
}


export class GetEnableMfaDeviceHeaders extends SpeakeasyBase {
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


export class GetEnableMfaDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEnableMfaDeviceQueryParams;

  @SpeakeasyMetadata()
  headers: GetEnableMfaDeviceHeaders;
}


export class GetEnableMfaDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
