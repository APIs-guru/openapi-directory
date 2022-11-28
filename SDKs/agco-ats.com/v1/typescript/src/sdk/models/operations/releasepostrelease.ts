import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleasePostReleaseRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesRelease1?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesRelease2?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReleasePostReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ReleasePostReleaseRequests;
}


export class ReleasePostReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  releasePostRelease200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  releasePostRelease200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
