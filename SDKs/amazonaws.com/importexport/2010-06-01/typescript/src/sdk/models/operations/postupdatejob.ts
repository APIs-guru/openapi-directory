import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}

export enum PostUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}

export enum PostUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class PostUpdateJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateJobActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostUpdateJobOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateJobVersionEnum;
}


export class PostUpdateJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdateJobQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateJobResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
