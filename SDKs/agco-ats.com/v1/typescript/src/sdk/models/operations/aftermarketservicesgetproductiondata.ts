import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AftermarketServicesGetProductionDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" })
  serialNumber: string;
}


export class AftermarketServicesGetProductionDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" })
  edtInstanceId: string;
}


export class AftermarketServicesGetProductionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AftermarketServicesGetProductionDataPathParams;

  @SpeakeasyMetadata()
  queryParams: AftermarketServicesGetProductionDataQueryParams;
}


export class AftermarketServicesGetProductionDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AgcoPowerServicesModelsProductionData })
  agcoPowerServicesModelsProductionData?: shared.AgcoPowerServicesModelsProductionData[];

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
