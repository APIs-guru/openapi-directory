import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTruststoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTruststoreDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
