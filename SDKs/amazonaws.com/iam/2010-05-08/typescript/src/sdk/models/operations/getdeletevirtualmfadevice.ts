import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteVirtualMfaDeviceActionEnum {
    DeleteVirtualMfaDevice = "DeleteVirtualMFADevice"
}

export enum GetDeleteVirtualMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteVirtualMfaDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVirtualMfaDeviceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVirtualMfaDeviceVersionEnum;
}


export class GetDeleteVirtualMfaDeviceHeaders extends SpeakeasyBase {
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


export class GetDeleteVirtualMfaDeviceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteVirtualMfaDeviceQueryParams;

  @Metadata()
  headers: GetDeleteVirtualMfaDeviceHeaders;
}


export class GetDeleteVirtualMfaDeviceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
