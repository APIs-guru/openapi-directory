import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCrxdeStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCrxdeStatus200PlainTextString?: string;

  @Metadata()
  getCrxdeStatus404PlainTextString?: string;
}
