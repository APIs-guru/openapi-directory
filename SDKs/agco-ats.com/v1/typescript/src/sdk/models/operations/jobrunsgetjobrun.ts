import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobRunsGetJobRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobRunID" })
  jobRunId: number;
}


export class JobRunsGetJobRunQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeActivityRunDetails" })
  includeActivityRunDetails?: boolean;
}


export class JobRunsGetJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobRunsGetJobRunPathParams;

  @SpeakeasyMetadata()
  queryParams: JobRunsGetJobRunQueryParams;
}


export class JobRunsGetJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRun;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
