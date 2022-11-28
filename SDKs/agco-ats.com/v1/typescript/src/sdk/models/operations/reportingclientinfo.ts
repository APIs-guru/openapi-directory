import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportingClientInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;
}


export class ReportingClientInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportingClientInfoQueryParams;
}


export class ReportingClientInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemModelsClientInfo?: shared.UpdateSystemModelsClientInfo;
}
