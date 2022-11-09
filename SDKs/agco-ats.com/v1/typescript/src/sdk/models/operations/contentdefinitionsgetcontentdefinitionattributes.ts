import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentDefinitionsGetContentDefinitionAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsGetContentDefinitionAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ContentDefinitionsGetContentDefinitionAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentDefinitionsGetContentDefinitionAttributesPathParams;

  @Metadata()
  queryParams: ContentDefinitionsGetContentDefinitionAttributesQueryParams;
}


export class ContentDefinitionsGetContentDefinitionAttributesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
