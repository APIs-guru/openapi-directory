import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportingUpdateGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ReportingUpdateGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReportingUpdateGroupsQueryParams;
}


export class ReportingUpdateGroupsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsUpdateGroup?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
