import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FilesGetFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class FilesGetFilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FilesGetFilesQueryParams;
}


export class FilesGetFilesResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsFileDownload?: shared.ApiIPagedResponseGlobalResourcesSharedModelsFileDownload;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
