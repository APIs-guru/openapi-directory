import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobRunsGetJobRunsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeActivityRunDetails" })
  includeActivityRunDetails?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class JobRunsGetJobRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: JobRunsGetJobRunsQueryParams;
}


export class JobRunsGetJobRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseBuildSystemSharedDtoJobRun?: shared.ApiPagedResponseBuildSystemSharedDtoJobRun;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
