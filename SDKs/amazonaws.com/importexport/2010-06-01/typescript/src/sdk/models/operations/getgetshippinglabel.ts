import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

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
  @Metadata({ data: "queryParam, style=form;explode=true;name=APIVersion" })
  apiVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetShippingLabelActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: GetGetShippingLabelOperationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetShippingLabelVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jobIds" })
  jobIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stateOrProvince" })
  stateOrProvince?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=street1" })
  street1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=street2" })
  street2?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=street3" })
  street3?: string;
}


export class GetGetShippingLabelRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetShippingLabelQueryParams;
}


export class GetGetShippingLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
