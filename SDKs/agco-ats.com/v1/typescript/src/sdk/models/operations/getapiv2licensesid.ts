import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2LicensesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GetApiV2LicensesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2LicensesIdPathParams;
}


export class GetApiV2LicensesIdResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  dealerDbModelsLicense?: shared.DealerDbModelsLicense;

  @Metadata()
  statusCode: number;
}
