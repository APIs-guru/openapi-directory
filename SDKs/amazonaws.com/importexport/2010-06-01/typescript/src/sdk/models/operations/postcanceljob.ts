import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCancelJobActionEnum {
    CancelJob = "CancelJob"
}

export enum PostCancelJobOperationEnum {
    CancelJob = "CancelJob"
}

export enum PostCancelJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class PostCancelJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCancelJobActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostCancelJobOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCancelJobVersionEnum;
}


export class PostCancelJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCancelJobQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCancelJobResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
