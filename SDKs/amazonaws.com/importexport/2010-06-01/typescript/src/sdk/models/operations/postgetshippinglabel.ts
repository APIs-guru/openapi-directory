import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetShippingLabelActionEnum {
    GetShippingLabel = "GetShippingLabel"
}

export enum PostGetShippingLabelOperationEnum {
    GetShippingLabel = "GetShippingLabel"
}

export enum PostGetShippingLabelVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class PostGetShippingLabelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetShippingLabelActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostGetShippingLabelOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetShippingLabelVersionEnum;
}


export class PostGetShippingLabelRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetShippingLabelQueryParams;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetShippingLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
