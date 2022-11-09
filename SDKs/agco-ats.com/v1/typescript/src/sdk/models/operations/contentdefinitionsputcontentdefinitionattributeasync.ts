import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionAttributeID" })
  contentDefinitionAttributeId: number;
}


export class ContentDefinitionsPutContentDefinitionAttributeAsyncRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ContentDefinitionsPutContentDefinitionAttributeAsyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams;

  @Metadata()
  request: ContentDefinitionsPutContentDefinitionAttributeAsyncRequests;
}


export class ContentDefinitionsPutContentDefinitionAttributeAsyncResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
