import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FilesPostFileRequests extends SpeakeasyBase {
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


export class FilesPostFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: FilesPostFileRequests;
}


export class FilesPostFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  filesPostFile200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  filesPostFile200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  filesPostFile200TextJsonString?: string;

  @SpeakeasyMetadata()
  filesPostFile200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
