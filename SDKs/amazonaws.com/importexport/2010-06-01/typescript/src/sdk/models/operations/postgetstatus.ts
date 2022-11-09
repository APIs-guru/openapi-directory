import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetStatusActionEnum {
    GetStatus = "GetStatus"
}

export enum PostGetStatusOperationEnum {
    GetStatus = "GetStatus"
}

export enum PostGetStatusVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class PostGetStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostGetStatusOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetStatusVersionEnum;
}


export class PostGetStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetStatusQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
