import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JobsGetJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class JobsGetJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: JobsGetJobsQueryParams;
}


export class JobsGetJobsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseBuildSystemSharedDtoJob?: shared.ApiPagedResponseBuildSystemSharedDtoJob;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
