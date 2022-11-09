import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserContentDefinitionsGetUserContentDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userContentDefinitionID" })
  userContentDefinitionId: number;
}


export class UserContentDefinitionsGetUserContentDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserContentDefinitionsGetUserContentDefinitionPathParams;
}


export class UserContentDefinitionsGetUserContentDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
