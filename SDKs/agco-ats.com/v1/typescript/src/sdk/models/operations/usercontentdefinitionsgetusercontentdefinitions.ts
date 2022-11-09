import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserContentDefinitionsGetUserContentDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" })
  contentDefinitionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class UserContentDefinitionsGetUserContentDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserContentDefinitionsGetUserContentDefinitionsQueryParams;
}


export class UserContentDefinitionsGetUserContentDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
