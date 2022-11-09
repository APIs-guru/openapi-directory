import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

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
  @Metadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetGetStatusOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetStatusVersionEnum;
}


export class GetGetStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetStatusQueryParams;
}


export class GetGetStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
