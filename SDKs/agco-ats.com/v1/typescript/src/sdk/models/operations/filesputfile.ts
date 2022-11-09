import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FilesPutFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class FilesPutFileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsFileDownload?: shared.GlobalResourcesSharedModelsFileDownload;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsFileDownload1?: shared.GlobalResourcesSharedModelsFileDownload;

  @Metadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsFileDownload2?: shared.GlobalResourcesSharedModelsFileDownload;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class FilesPutFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilesPutFilePathParams;

  @Metadata()
  request: FilesPutFileRequests;
}


export class FilesPutFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
