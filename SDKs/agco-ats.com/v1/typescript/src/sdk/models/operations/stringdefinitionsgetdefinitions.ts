import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StringDefinitionsGetDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=descriptionText" })
  descriptionText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeletedLanguages" })
  includeDeletedLanguages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeTranslations" })
  includeTranslations?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageIds" })
  languageIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=matchingTranslationsOnly" })
  matchingTranslationsOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modifiedAfterTimestamp" })
  modifiedAfterTimestamp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stringIds" })
  stringIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stringText" })
  stringText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useFullText" })
  useFullText?: boolean;
}


export class StringDefinitionsGetDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StringDefinitionsGetDefinitionsQueryParams;
}


export class StringDefinitionsGetDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsStringDefinition?: shared.ApiIPagedResponseGlobalResourcesSharedModelsStringDefinition;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
