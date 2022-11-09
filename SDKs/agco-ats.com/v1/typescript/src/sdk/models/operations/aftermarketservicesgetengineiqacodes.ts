import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AftermarketServicesGetEngineIqaCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" })
  serialNumber: string;
}


export class AftermarketServicesGetEngineIqaCodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" })
  edtInstanceId: string;
}


export class AftermarketServicesGetEngineIqaCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AftermarketServicesGetEngineIqaCodesPathParams;

  @Metadata()
  queryParams: AftermarketServicesGetEngineIqaCodesQueryParams;
}


export class AftermarketServicesGetEngineIqaCodesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  aftermarketServicesGetEngineIqaCodes200ApplicationJsonStrings?: string[];

  @Metadata()
  aftermarketServicesGetEngineIqaCodes200TextJsonStrings?: string[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
