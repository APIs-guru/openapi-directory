import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionsPostContentSubmissionAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsPostContentSubmissionAttributeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentSubmissionsPostContentSubmissionAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionsPostContentSubmissionAttributePathParams;

  @Metadata()
  request: ContentSubmissionsPostContentSubmissionAttributeRequests;
}


export class ContentSubmissionsPostContentSubmissionAttributeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionsPostContentSubmissionAttribute200ApplicationJsonInt32Integer?: number;

  @Metadata()
  contentSubmissionsPostContentSubmissionAttribute200TextJsonInt32Integer?: number;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
