import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListJobsActionEnum {
    ListJobs = "ListJobs"
}

export enum GetListJobsOperationEnum {
    ListJobs = "ListJobs"
}

export enum GetListJobsVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetListJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListJobsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxJobs" })
  maxJobs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetListJobsOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListJobsVersionEnum;
}


export class GetListJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListJobsQueryParams;
}


export class GetListJobsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
