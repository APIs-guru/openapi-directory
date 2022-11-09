import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalImageCategoriesGetFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GlobalImageCategoriesGetFilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GlobalImageCategoriesGetFilesQueryParams;
}


export class GlobalImageCategoriesGetFilesResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory?: shared.ApiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
