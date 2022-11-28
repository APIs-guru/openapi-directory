import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserContentDefinitionsGetUserContentDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userContentDefinitionID" })
  userContentDefinitionId: number;
}


export class UserContentDefinitionsGetUserContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserContentDefinitionsGetUserContentDefinitionPathParams;
}


export class UserContentDefinitionsGetUserContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
