import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetShippingLabelActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: PostGetShippingLabelOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetShippingLabelVersionEnum;
}


export class PostGetShippingLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetShippingLabelQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetShippingLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
