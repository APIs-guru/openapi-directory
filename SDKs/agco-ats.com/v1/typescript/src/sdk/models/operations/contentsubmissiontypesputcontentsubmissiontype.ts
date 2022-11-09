import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionTypesPutContentSubmissionTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ContentSubmissionTypesPutContentSubmissionTypeRequests extends SpeakeasyBase {
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


export class ContentSubmissionTypesPutContentSubmissionTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionTypesPutContentSubmissionTypePathParams;

  @Metadata()
  request: ContentSubmissionTypesPutContentSubmissionTypeRequests;
}


export class ContentSubmissionTypesPutContentSubmissionTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
