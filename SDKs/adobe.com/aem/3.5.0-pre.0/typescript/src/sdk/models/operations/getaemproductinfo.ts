import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAemProductInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAemProductInfoDefaultApplicationJsonStrings?: string[];
}
