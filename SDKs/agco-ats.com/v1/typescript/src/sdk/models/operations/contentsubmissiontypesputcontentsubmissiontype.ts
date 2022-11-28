import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionTypesPutContentSubmissionTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ContentSubmissionTypesPutContentSubmissionTypeRequests extends SpeakeasyBase {
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


export class ContentSubmissionTypesPutContentSubmissionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionTypesPutContentSubmissionTypePathParams;

  @SpeakeasyMetadata()
  request: ContentSubmissionTypesPutContentSubmissionTypeRequests;
}


export class ContentSubmissionTypesPutContentSubmissionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
