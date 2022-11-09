import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingClientInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;
}


export class ReportingClientInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingClientInfoQueryParams;
}


export class ReportingClientInfoResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsClientInfo?: shared.UpdateSystemModelsClientInfo;
}
