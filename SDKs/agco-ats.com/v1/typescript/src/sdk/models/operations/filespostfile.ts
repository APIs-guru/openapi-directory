import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FilesPostFileRequests extends SpeakeasyBase {
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


export class FilesPostFileRequest extends SpeakeasyBase {
  @Metadata()
  request: FilesPostFileRequests;
}


export class FilesPostFileResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  filesPostFile200ApplicationJsonString?: string;

  @Metadata()
  filesPostFile200ApplicationXmlString?: string;

  @Metadata()
  filesPostFile200TextJsonString?: string;

  @Metadata()
  filesPostFile200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
