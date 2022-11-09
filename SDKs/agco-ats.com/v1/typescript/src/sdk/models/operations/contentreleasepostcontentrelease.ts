import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentReleasePostContentReleaseRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion1?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentReleaseVersion2?: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentReleasePostContentReleaseRequest extends SpeakeasyBase {
  @Metadata()
  request: ContentReleasePostContentReleaseRequests;
}


export class ContentReleasePostContentReleaseResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentReleasePostContentRelease200ApplicationJsonInt32Integer?: number;

  @Metadata()
  contentReleasePostContentRelease200TextJsonInt32Integer?: number;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
