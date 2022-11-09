import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AftermarketServicesGetProductionDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" })
  serialNumber: string;
}


export class AftermarketServicesGetProductionDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" })
  edtInstanceId: string;
}


export class AftermarketServicesGetProductionDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AftermarketServicesGetProductionDataPathParams;

  @Metadata()
  queryParams: AftermarketServicesGetProductionDataQueryParams;
}


export class AftermarketServicesGetProductionDataResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AgcoPowerServicesModelsProductionData })
  agcoPowerServicesModelsProductionData?: shared.AgcoPowerServicesModelsProductionData[];

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
