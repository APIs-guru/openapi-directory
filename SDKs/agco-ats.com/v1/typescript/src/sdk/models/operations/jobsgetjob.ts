import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JobsGetJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobID" })
  jobId: number;
}


export class JobsGetJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;
}


export class JobsGetJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobsGetJobPathParams;

  @Metadata()
  queryParams: JobsGetJobQueryParams;
}


export class JobsGetJobResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoJob?: shared.BuildSystemSharedDtoJob;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
