import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalImagesGetGlobalImageContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesGetGlobalImageContentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFullImage" })
  isFullImage?: boolean;
}


export class GlobalImagesGetGlobalImageContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GlobalImagesGetGlobalImageContentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GlobalImagesGetGlobalImageContentsQueryParams;
}


export class GlobalImagesGetGlobalImageContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
