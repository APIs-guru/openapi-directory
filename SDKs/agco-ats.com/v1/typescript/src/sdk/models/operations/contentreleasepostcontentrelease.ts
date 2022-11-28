import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentReleasePostContentReleaseRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion1?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion2?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentReleasePostContentReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ContentReleasePostContentReleaseRequests;
}


export class ContentReleasePostContentReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentReleasePostContentRelease200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentReleasePostContentRelease200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
