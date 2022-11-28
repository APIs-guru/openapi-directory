import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AftermarketServicesGetEngineIqaCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" })
  serialNumber: string;
}


export class AftermarketServicesGetEngineIqaCodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" })
  edtInstanceId: string;
}


export class AftermarketServicesGetEngineIqaCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AftermarketServicesGetEngineIqaCodesPathParams;

  @SpeakeasyMetadata()
  queryParams: AftermarketServicesGetEngineIqaCodesQueryParams;
}


export class AftermarketServicesGetEngineIqaCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  aftermarketServicesGetEngineIqaCodes200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  aftermarketServicesGetEngineIqaCodes200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
