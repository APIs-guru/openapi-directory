import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FilesPutFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class FilesPutFileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsFileDownload?: shared.GlobalResourcesSharedModelsFileDownload;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsFileDownload1?: shared.GlobalResourcesSharedModelsFileDownload;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsFileDownload2?: shared.GlobalResourcesSharedModelsFileDownload;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class FilesPutFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesPutFilePathParams;

  @SpeakeasyMetadata()
  request: FilesPutFileRequests;
}


export class FilesPutFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
