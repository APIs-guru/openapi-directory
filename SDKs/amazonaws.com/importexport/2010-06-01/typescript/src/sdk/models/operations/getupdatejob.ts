import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}

export enum GetUpdateJobJobTypeEnum {
    Import = "Import"
,    Export = "Export"
}

export enum GetUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}

export enum GetUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetUpdateJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateJobActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=JobType" })
  jobType: GetUpdateJobJobTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Manifest" })
  manifest: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetUpdateJobOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ValidateOnly" })
  validateOnly: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateJobVersionEnum;
}


export class GetUpdateJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateJobQueryParams;
}


export class GetUpdateJobResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
