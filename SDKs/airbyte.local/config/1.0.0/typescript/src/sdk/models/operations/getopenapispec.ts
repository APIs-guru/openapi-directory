import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOpenApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOpenApiSpec200TextPlainBinaryString?: Uint8Array;
}
