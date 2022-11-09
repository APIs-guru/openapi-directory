import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserContentDefinitionsPostUserContentDefinitionRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  contentSubmissionSharedBusinessEntitiesUserContentDefinition1?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @Metadata({ data: "request, media_type=text/json" })
  contentSubmissionSharedBusinessEntitiesUserContentDefinition2?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UserContentDefinitionsPostUserContentDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  request: UserContentDefinitionsPostUserContentDefinitionRequests;
}


export class UserContentDefinitionsPostUserContentDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userContentDefinitionsPostUserContentDefinition200ApplicationJsonInt32Integer?: number;

  @Metadata()
  userContentDefinitionsPostUserContentDefinition200TextJsonInt32Integer?: number;
}
