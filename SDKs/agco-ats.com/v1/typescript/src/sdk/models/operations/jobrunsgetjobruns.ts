import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JobRunsGetJobRunsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeActivityRunDetails" })
  includeActivityRunDetails?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class JobRunsGetJobRunsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: JobRunsGetJobRunsQueryParams;
}


export class JobRunsGetJobRunsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseBuildSystemSharedDtoJobRun?: shared.ApiPagedResponseBuildSystemSharedDtoJobRun;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
