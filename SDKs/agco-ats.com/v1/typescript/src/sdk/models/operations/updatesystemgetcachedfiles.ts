import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSystemGetCachedFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ClientID" })
  clientId: string;
}


export class UpdateSystemGetCachedFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Expired" })
  expired: boolean;
}


export class UpdateSystemGetCachedFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSystemGetCachedFilesPathParams;

  @Metadata()
  queryParams: UpdateSystemGetCachedFilesQueryParams;
}


export class UpdateSystemGetCachedFilesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemGetCachedFiles200ApplicationJsonStrings?: string[];

  @Metadata()
  updateSystemGetCachedFiles200TextJsonStrings?: string[];
}
