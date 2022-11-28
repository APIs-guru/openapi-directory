import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionAttributeID" })
  contentSubmissionAttributeId: number;
}


export class ContentSubmissionsPutContentSubmissionAttributeAsyncRequests extends SpeakeasyBase {
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


export class ContentSubmissionsPutContentSubmissionAttributeAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams;

  @SpeakeasyMetadata()
  request: ContentSubmissionsPutContentSubmissionAttributeAsyncRequests;
}


export class ContentSubmissionsPutContentSubmissionAttributeAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
