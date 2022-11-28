import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCancelJobActionEnum {
    CancelJob = "CancelJob"
}

export enum GetCancelJobOperationEnum {
    CancelJob = "CancelJob"
}

export enum GetCancelJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetCancelJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelJobActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetCancelJobOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelJobVersionEnum;
}


export class GetCancelJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCancelJobQueryParams;
}


export class GetCancelJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
