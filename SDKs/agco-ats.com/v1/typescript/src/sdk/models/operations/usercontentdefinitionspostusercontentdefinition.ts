import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserContentDefinitionsPostUserContentDefinitionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesUserContentDefinition1?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesUserContentDefinition2?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UserContentDefinitionsPostUserContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UserContentDefinitionsPostUserContentDefinitionRequests;
}


export class UserContentDefinitionsPostUserContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userContentDefinitionsPostUserContentDefinition200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  userContentDefinitionsPostUserContentDefinition200TextJsonInt32Integer?: number;
}
