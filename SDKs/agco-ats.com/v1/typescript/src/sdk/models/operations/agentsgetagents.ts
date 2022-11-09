import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AgentsGetAgentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AgentsGetAgentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AgentsGetAgentsQueryParams;
}


export class AgentsGetAgentsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseBuildSystemSharedDtoAgent?: shared.ApiPagedResponseBuildSystemSharedDtoAgent;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
