import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StringDefinitionsGetDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class StringDefinitionsGetDefinitionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeletedLanguages" })
  includeDeletedLanguages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTranslations" })
  includeTranslations?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageIds" })
  languageIds?: string;
}


export class StringDefinitionsGetDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StringDefinitionsGetDefinitionPathParams;

  @SpeakeasyMetadata()
  queryParams: StringDefinitionsGetDefinitionQueryParams;
}


export class StringDefinitionsGetDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsStringDefinition?: shared.GlobalResourcesSharedModelsStringDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}
