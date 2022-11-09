import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResyncMfaDeviceActionEnum {
    ResyncMfaDevice = "ResyncMFADevice"
}

export enum GetResyncMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetResyncMfaDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResyncMfaDeviceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode1" })
  authenticationCode1: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode2" })
  authenticationCode2: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResyncMfaDeviceVersionEnum;
}


export class GetResyncMfaDeviceHeaders extends SpeakeasyBase {
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


export class GetResyncMfaDeviceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResyncMfaDeviceQueryParams;

  @Metadata()
  headers: GetResyncMfaDeviceHeaders;
}


export class GetResyncMfaDeviceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
