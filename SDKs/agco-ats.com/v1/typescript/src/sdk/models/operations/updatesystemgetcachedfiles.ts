import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSystemGetCachedFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ClientID" })
  clientId: string;
}


export class UpdateSystemGetCachedFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Expired" })
  expired: boolean;
}


export class UpdateSystemGetCachedFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSystemGetCachedFilesPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateSystemGetCachedFilesQueryParams;
}


export class UpdateSystemGetCachedFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSystemGetCachedFiles200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  updateSystemGetCachedFiles200TextJsonStrings?: string[];
}
