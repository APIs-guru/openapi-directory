import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalImageCategoriesGetFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImageCategoriesGetFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GlobalImageCategoriesGetFilePathParams;
}


export class GlobalImageCategoriesGetFileResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsGlobalImageCategory?: shared.GlobalResourcesSharedModelsGlobalImageCategory;

  @Metadata()
  statusCode: number;
}
