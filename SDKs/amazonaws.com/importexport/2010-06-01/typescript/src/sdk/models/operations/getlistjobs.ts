import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListJobsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxJobs" })
  maxJobs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetListJobsOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListJobsVersionEnum;
}


export class GetListJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListJobsQueryParams;
}


export class GetListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
