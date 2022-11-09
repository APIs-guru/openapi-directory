import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionTypesPostContentSubmissionTypeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionType1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionType2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentSubmissionTypesPostContentSubmissionTypeRequest extends SpeakeasyBase {
  @Metadata()
  request: ContentSubmissionTypesPostContentSubmissionTypeRequests;
}


export class ContentSubmissionTypesPostContentSubmissionTypeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionTypesPostContentSubmissionType200ApplicationJsonInt32Integer?: number;

  @Metadata()
  contentSubmissionTypesPostContentSubmissionType200TextJsonInt32Integer?: number;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
