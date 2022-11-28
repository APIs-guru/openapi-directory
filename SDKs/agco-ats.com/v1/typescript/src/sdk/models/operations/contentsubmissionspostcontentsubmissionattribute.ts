import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionsPostContentSubmissionAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsPostContentSubmissionAttributeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentSubmissionsPostContentSubmissionAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionsPostContentSubmissionAttributePathParams;

  @SpeakeasyMetadata()
  request: ContentSubmissionsPostContentSubmissionAttributeRequests;
}


export class ContentSubmissionsPostContentSubmissionAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionsPostContentSubmissionAttribute200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentSubmissionsPostContentSubmissionAttribute200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
