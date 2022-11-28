import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalImageCategoriesGetFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GlobalImageCategoriesGetFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GlobalImageCategoriesGetFilesQueryParams;
}


export class GlobalImageCategoriesGetFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory?: shared.ApiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
