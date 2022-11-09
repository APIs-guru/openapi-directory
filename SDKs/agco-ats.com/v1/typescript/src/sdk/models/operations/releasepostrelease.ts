import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleasePostReleaseRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesRelease?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesRelease1?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesRelease2?: shared.ContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReleasePostReleaseRequest extends SpeakeasyBase {
  @Metadata()
  request: ReleasePostReleaseRequests;
}


export class ReleasePostReleaseResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  releasePostRelease200ApplicationJsonInt32Integer?: number;

  @Metadata()
  releasePostRelease200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
