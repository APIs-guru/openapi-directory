import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableMfaDeviceActionEnum {
    EnableMfaDevice = "EnableMFADevice"
}

export enum GetEnableMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetEnableMfaDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableMfaDeviceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode1" })
  authenticationCode1: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationCode2" })
  authenticationCode2: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableMfaDeviceVersionEnum;
}


export class GetEnableMfaDeviceHeaders extends SpeakeasyBase {
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


export class GetEnableMfaDeviceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableMfaDeviceQueryParams;

  @Metadata()
  headers: GetEnableMfaDeviceHeaders;
}


export class GetEnableMfaDeviceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
