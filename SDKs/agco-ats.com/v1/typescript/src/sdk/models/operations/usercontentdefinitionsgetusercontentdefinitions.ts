import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserContentDefinitionsGetUserContentDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class UserContentDefinitionsGetUserContentDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserContentDefinitionsGetUserContentDefinitionsQueryParams;
}


export class UserContentDefinitionsGetUserContentDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
