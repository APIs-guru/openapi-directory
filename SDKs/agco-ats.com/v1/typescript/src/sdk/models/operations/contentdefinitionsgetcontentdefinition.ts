import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentDefinitionsGetContentDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" })
  contentDefinitionId: number;
}


export class ContentDefinitionsGetContentDefinitionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;
}


export class ContentDefinitionsGetContentDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDefinitionsGetContentDefinitionPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentDefinitionsGetContentDefinitionQueryParams;
}


export class ContentDefinitionsGetContentDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionSharedBusinessEntitiesContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinition;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
