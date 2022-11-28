import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JobsPostJobRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoJob?: shared.BuildSystemSharedDtoJobInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoJob1?: shared.BuildSystemSharedDtoJobInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoJob2?: shared.BuildSystemSharedDtoJobInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class JobsPostJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: JobsPostJobRequestsInput;
}


export class JobsPostJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jobsPostJob200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  jobsPostJob200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
