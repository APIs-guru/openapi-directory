import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingGetClientQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;
}


export class ReportingGetClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingGetClientQueryParams;
}


export class ReportingGetClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsClient?: shared.UpdateSystemModelsClient;
}
