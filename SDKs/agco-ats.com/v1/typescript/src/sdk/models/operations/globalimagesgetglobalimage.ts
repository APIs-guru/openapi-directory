import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalImagesGetGlobalImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesGetGlobalImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GlobalImagesGetGlobalImagePathParams;
}


export class GlobalImagesGetGlobalImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsGlobalImage?: shared.GlobalResourcesSharedModelsGlobalImage;

  @SpeakeasyMetadata()
  statusCode: number;
}
