import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionTypesPostContentSubmissionTypeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionType1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionType2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentSubmissionTypesPostContentSubmissionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ContentSubmissionTypesPostContentSubmissionTypeRequests;
}


export class ContentSubmissionTypesPostContentSubmissionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionTypesPostContentSubmissionType200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentSubmissionTypesPostContentSubmissionType200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
