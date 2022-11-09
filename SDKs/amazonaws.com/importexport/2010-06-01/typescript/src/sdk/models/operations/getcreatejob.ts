import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateJobActionEnum {
    CreateJob = "CreateJob"
}

export enum GetCreateJobJobTypeEnum {
    Import = "Import"
,    Export = "Export"
}

export enum GetCreateJobOperationEnum {
    CreateJob = "CreateJob"
}

export enum GetCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetCreateJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateJobActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=JobType" })
  jobType: GetCreateJobJobTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Manifest" })
  manifest: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ManifestAddendum" })
  manifestAddendum?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetCreateJobOperationEnum;

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
  version: GetCreateJobVersionEnum;
}


export class GetCreateJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateJobQueryParams;
}


export class GetCreateJobResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
