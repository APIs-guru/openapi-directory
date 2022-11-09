import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentDefinitionsGetContentDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsGetContentDefinitionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;
}


export class ContentDefinitionsGetContentDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentDefinitionsGetContentDefinitionPathParams;

  @Metadata()
  queryParams: ContentDefinitionsGetContentDefinitionQueryParams;
}


export class ContentDefinitionsGetContentDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionSharedBusinessEntitiesContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinition;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
