import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalImagesGetGlobalImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesGetGlobalImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GlobalImagesGetGlobalImagePathParams;
}


export class GlobalImagesGetGlobalImageResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsGlobalImage?: shared.GlobalResourcesSharedModelsGlobalImage;

  @Metadata()
  statusCode: number;
}
