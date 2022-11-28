import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FilesGetFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class FilesGetFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesGetFilePathParams;
}


export class FilesGetFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsFileDownload?: shared.GlobalResourcesSharedModelsFileDownload;

  @SpeakeasyMetadata()
  statusCode: number;
}
