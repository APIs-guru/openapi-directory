import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalImagesGetGlobalImageContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesGetGlobalImageContentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isFullImage" })
  isFullImage?: boolean;
}


export class GlobalImagesGetGlobalImageContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GlobalImagesGetGlobalImageContentsPathParams;

  @Metadata()
  queryParams: GlobalImagesGetGlobalImageContentsQueryParams;
}


export class GlobalImagesGetGlobalImageContentsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
