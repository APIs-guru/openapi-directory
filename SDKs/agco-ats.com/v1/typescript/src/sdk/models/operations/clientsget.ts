import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClientsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ClientsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ClientsGetQueryParams;
}


export class ClientsGetResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsClient?: shared.ApiPagedResponseUpdateSystemModelsClient;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
