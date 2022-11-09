import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JobRunsGetJobRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobRunID" })
  jobRunId: number;
}


export class JobRunsGetJobRunQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeActivityRunDetails" })
  includeActivityRunDetails?: boolean;
}


export class JobRunsGetJobRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobRunsGetJobRunPathParams;

  @Metadata()
  queryParams: JobRunsGetJobRunQueryParams;
}


export class JobRunsGetJobRunResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRun;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
