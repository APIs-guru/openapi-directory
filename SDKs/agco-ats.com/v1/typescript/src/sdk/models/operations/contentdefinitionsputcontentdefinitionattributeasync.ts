import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionAttributeID" })
  contentDefinitionAttributeId: number;
}


export class ContentDefinitionsPutContentDefinitionAttributeAsyncRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentDefinitionsPutContentDefinitionAttributeAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams;

  @SpeakeasyMetadata()
  request: ContentDefinitionsPutContentDefinitionAttributeAsyncRequests;
}


export class ContentDefinitionsPutContentDefinitionAttributeAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
