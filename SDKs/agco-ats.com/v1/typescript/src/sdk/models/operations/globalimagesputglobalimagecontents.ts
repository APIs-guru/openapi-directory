import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalImagesPutGlobalImageContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesPutGlobalImageContentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFullImage" })
  isFullImage?: boolean;
}


export class GlobalImagesPutGlobalImageContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GlobalImagesPutGlobalImageContentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GlobalImagesPutGlobalImageContentsQueryParams;
}


export class GlobalImagesPutGlobalImageContentsResponse extends SpeakeasyBase {
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
