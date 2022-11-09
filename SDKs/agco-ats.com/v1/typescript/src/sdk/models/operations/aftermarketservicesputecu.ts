import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AftermarketServicesPutEcuPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" })
  serialNumber: string;
}


export class AftermarketServicesPutEcuQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" })
  edtInstanceId: string;
}


export class AftermarketServicesPutEcuRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  agcoPowerServicesModelsEcu?: shared.AgcoPowerServicesModelsEcu;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  agcoPowerServicesModelsEcu1?: shared.AgcoPowerServicesModelsEcu;

  @Metadata({ data: "request, media_type=text/json" })
  agcoPowerServicesModelsEcu2?: shared.AgcoPowerServicesModelsEcu;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AftermarketServicesPutEcuRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AftermarketServicesPutEcuPathParams;

  @Metadata()
  queryParams: AftermarketServicesPutEcuQueryParams;

  @Metadata()
  request: AftermarketServicesPutEcuRequests;
}


export class AftermarketServicesPutEcuResponse extends SpeakeasyBase {
  @Metadata()
  agcoPowerServicesModelsEcu?: shared.AgcoPowerServicesModelsEcu;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
