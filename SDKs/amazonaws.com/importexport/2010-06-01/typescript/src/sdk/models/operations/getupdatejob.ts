import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}

export enum GetUpdateJobJobTypeEnum {
    Import = "Import",
    Export = "Export"
}

export enum GetUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}

export enum GetUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetUpdateJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateJobActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobType" })
  jobType: GetUpdateJobJobTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Manifest" })
  manifest: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetUpdateJobOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidateOnly" })
  validateOnly: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateJobVersionEnum;
}


export class GetUpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateJobQueryParams;
}


export class GetUpdateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
