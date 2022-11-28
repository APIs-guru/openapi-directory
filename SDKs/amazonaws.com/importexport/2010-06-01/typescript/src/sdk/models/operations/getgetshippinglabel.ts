import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetShippingLabelActionEnum {
    GetShippingLabel = "GetShippingLabel"
}

export enum GetGetShippingLabelOperationEnum {
    GetShippingLabel = "GetShippingLabel"
}

export enum GetGetShippingLabelVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}


export class GetGetShippingLabelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetShippingLabelActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetGetShippingLabelOperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetShippingLabelVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobIds" })
  jobIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stateOrProvince" })
  stateOrProvince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=street1" })
  street1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=street2" })
  street2?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=street3" })
  street3?: string;
}


export class GetGetShippingLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetShippingLabelQueryParams;
}


export class GetGetShippingLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
