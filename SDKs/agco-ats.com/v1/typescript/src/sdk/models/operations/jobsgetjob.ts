import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobsGetJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobID" })
  jobId: number;
}


export class JobsGetJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;
}


export class JobsGetJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobsGetJobPathParams;

  @SpeakeasyMetadata()
  queryParams: JobsGetJobQueryParams;
}


export class JobsGetJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoJob?: shared.BuildSystemSharedDtoJob;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
