import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportArchiveResponse extends SpeakeasyBase {
  @Metadata()
  airbyteArchive?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
