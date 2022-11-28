import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AftermarketServicesPutEcuPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" })
  serialNumber: string;
}


export class AftermarketServicesPutEcuQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" })
  edtInstanceId: string;
}


export class AftermarketServicesPutEcuRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  agcoPowerServicesModelsEcu?: shared.AgcoPowerServicesModelsEcu;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  agcoPowerServicesModelsEcu1?: shared.AgcoPowerServicesModelsEcu;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  agcoPowerServicesModelsEcu2?: shared.AgcoPowerServicesModelsEcu;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AftermarketServicesPutEcuRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AftermarketServicesPutEcuPathParams;

  @SpeakeasyMetadata()
  queryParams: AftermarketServicesPutEcuQueryParams;

  @SpeakeasyMetadata()
  request: AftermarketServicesPutEcuRequests;
}


export class AftermarketServicesPutEcuResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agcoPowerServicesModelsEcu?: shared.AgcoPowerServicesModelsEcu;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
