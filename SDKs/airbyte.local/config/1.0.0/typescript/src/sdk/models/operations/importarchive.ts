import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-gzip" })
  request: Uint8Array;
}


export class ImportArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importRead?: shared.ImportRead;

  @SpeakeasyMetadata()
  statusCode: number;
}
