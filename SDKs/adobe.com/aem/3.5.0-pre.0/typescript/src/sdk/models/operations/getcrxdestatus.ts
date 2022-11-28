import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCrxdeStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCrxdeStatus200PlainTextString?: string;

  @SpeakeasyMetadata()
  getCrxdeStatus404PlainTextString?: string;
}
