import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StringDefinitionsGetDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class StringDefinitionsGetDefinitionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeletedLanguages" })
  includeDeletedLanguages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeTranslations" })
  includeTranslations?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageIds" })
  languageIds?: string;
}


export class StringDefinitionsGetDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StringDefinitionsGetDefinitionPathParams;

  @Metadata()
  queryParams: StringDefinitionsGetDefinitionQueryParams;
}


export class StringDefinitionsGetDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsStringDefinition?: shared.GlobalResourcesSharedModelsStringDefinition;

  @Metadata()
  statusCode: number;
}
