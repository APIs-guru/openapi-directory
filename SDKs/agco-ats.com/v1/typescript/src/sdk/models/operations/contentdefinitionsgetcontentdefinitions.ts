import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentDefinitionsGetContentDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class ContentDefinitionsGetContentDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ContentDefinitionsGetContentDefinitionsQueryParams;
}


export class ContentDefinitionsGetContentDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
