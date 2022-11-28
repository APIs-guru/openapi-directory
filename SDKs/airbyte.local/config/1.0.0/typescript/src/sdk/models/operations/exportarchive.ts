import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  airbyteArchive?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
