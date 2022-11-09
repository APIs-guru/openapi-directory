import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListJobsActionEnum {
    ListJobs = "ListJobs"
}

export enum PostListJobsOperationEnum {
    ListJobs = "ListJobs"
}

export enum PostListJobsVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class PostListJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListJobsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxJobs" })
  maxJobs?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostListJobsOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListJobsVersionEnum;
}


export class PostListJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListJobsQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListJobsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
