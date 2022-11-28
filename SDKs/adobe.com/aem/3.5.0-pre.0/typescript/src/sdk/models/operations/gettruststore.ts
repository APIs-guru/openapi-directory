import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTruststoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTruststoreDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
