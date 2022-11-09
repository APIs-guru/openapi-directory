import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentDefinitionsPostContentDefinitionAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsPostContentDefinitionAttributeRequests extends SpeakeasyBase {
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


export class ContentDefinitionsPostContentDefinitionAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentDefinitionsPostContentDefinitionAttributePathParams;

  @Metadata()
  request: ContentDefinitionsPostContentDefinitionAttributeRequests;
}


export class ContentDefinitionsPostContentDefinitionAttributeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentDefinitionsPostContentDefinitionAttribute200ApplicationJsonInt32Integer?: number;

  @Metadata()
  contentDefinitionsPostContentDefinitionAttribute200TextJsonInt32Integer?: number;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
