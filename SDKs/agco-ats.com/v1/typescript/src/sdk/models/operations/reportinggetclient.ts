import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingGetClientQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;
}


export class ReportingGetClientRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingGetClientQueryParams;
}


export class ReportingGetClientResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsClient?: shared.UpdateSystemModelsClient;
}
