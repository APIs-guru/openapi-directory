import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportArchiveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-gzip" })
  request: Uint8Array;
}


export class ImportArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importRead?: shared.ImportRead;

  @Metadata()
  statusCode: number;
}
