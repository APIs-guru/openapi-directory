import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateJobActionEnum {
    CreateJob = "CreateJob"
}

export enum GetCreateJobJobTypeEnum {
    Import = "Import",
    Export = "Export"
}

export enum GetCreateJobOperationEnum {
    CreateJob = "CreateJob"
}

export enum GetCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetCreateJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateJobActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobType" })
  jobType: GetCreateJobJobTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Manifest" })
  manifest: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ManifestAddendum" })
  manifestAddendum?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetCreateJobOperationEnum;

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
  version: GetCreateJobVersionEnum;
}


export class GetCreateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateJobQueryParams;
}


export class GetCreateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
