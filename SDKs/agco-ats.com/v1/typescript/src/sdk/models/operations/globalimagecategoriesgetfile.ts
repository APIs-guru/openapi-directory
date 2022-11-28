import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalImageCategoriesGetFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImageCategoriesGetFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GlobalImageCategoriesGetFilePathParams;
}


export class GlobalImageCategoriesGetFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsGlobalImageCategory?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @SpeakeasyMetadata()
  statusCode: number;
}
