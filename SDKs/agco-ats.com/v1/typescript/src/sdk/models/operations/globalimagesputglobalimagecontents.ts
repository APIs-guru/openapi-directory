import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalImagesPutGlobalImageContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class GlobalImagesPutGlobalImageContentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isFullImage" })
  isFullImage?: boolean;
}


export class GlobalImagesPutGlobalImageContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GlobalImagesPutGlobalImageContentsPathParams;

  @Metadata()
  queryParams: GlobalImagesPutGlobalImageContentsQueryParams;
}


export class GlobalImagesPutGlobalImageContentsResponse extends SpeakeasyBase {
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
