import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguagesGetLanguagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class LanguagesGetLanguagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LanguagesGetLanguagesQueryParams;
}


export class LanguagesGetLanguagesResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsLanguage?: shared.ApiIPagedResponseGlobalResourcesSharedModelsLanguage;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
