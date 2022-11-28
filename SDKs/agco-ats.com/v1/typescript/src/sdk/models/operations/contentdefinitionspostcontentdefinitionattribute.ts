import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentDefinitionsPostContentDefinitionAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsPostContentDefinitionAttributeRequests extends SpeakeasyBase {
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


export class ContentDefinitionsPostContentDefinitionAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDefinitionsPostContentDefinitionAttributePathParams;

  @SpeakeasyMetadata()
  request: ContentDefinitionsPostContentDefinitionAttributeRequests;
}


export class ContentDefinitionsPostContentDefinitionAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentDefinitionsPostContentDefinitionAttribute200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentDefinitionsPostContentDefinitionAttribute200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
