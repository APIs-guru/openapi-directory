import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentDefinitionsGetContentDefinitionAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsGetContentDefinitionAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ContentDefinitionsGetContentDefinitionAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDefinitionsGetContentDefinitionAttributesPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentDefinitionsGetContentDefinitionAttributesQueryParams;
}


export class ContentDefinitionsGetContentDefinitionAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
