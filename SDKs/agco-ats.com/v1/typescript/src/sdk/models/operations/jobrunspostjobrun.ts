import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobRunsPostJobRunRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoJobRun?: shared.BuildSystemSharedDtoJobRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoJobRun1?: shared.BuildSystemSharedDtoJobRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoJobRun2?: shared.BuildSystemSharedDtoJobRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class JobRunsPostJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: JobRunsPostJobRunRequestsInput;
}


export class JobRunsPostJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jobRunsPostJobRun200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  jobRunsPostJobRun200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
