import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetStatusActionEnum {
    GetStatus = "GetStatus"
}

export enum GetGetStatusOperationEnum {
    GetStatus = "GetStatus"
}

export enum GetGetStatusVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetGetStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetStatusActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetGetStatusOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetStatusVersionEnum;
}


export class GetGetStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetStatusQueryParams;
}


export class GetGetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
