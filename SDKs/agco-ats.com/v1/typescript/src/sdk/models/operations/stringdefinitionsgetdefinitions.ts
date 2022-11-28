import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StringDefinitionsGetDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeletedLanguages" })
  includeDeletedLanguages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTranslations" })
  includeTranslations?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageIds" })
  languageIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=matchingTranslationsOnly" })
  matchingTranslationsOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedAfterTimestamp" })
  modifiedAfterTimestamp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stringIds" })
  stringIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stringText" })
  stringText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useFullText" })
  useFullText?: boolean;
}


export class StringDefinitionsGetDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StringDefinitionsGetDefinitionsQueryParams;
}


export class StringDefinitionsGetDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsStringDefinition?: shared.ApiIPagedResponseGlobalResourcesSharedModelsStringDefinition;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
