import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteVirtualMfaDeviceActionEnum {
    DeleteVirtualMfaDevice = "DeleteVirtualMFADevice"
}

export enum GetDeleteVirtualMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteVirtualMfaDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVirtualMfaDeviceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVirtualMfaDeviceVersionEnum;
}


export class GetDeleteVirtualMfaDeviceHeaders extends SpeakeasyBase {
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


export class GetDeleteVirtualMfaDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteVirtualMfaDeviceQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteVirtualMfaDeviceHeaders;
}


export class GetDeleteVirtualMfaDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
