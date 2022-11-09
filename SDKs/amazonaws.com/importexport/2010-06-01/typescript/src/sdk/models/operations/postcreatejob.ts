import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateJobActionEnum {
    CreateJob = "CreateJob"
}

export enum PostCreateJobOperationEnum {
    CreateJob = "CreateJob"
}

export enum PostCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class PostCreateJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateJobActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostCreateJobOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateJobVersionEnum;
}


export class PostCreateJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateJobQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateJobResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
