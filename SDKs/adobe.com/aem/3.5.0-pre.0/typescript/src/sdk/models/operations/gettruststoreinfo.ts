import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTruststoreInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  truststoreInfo?: shared.TruststoreInfo;

  @SpeakeasyMetadata()
  getTruststoreInfoDefaultApplicationJsonString?: string;
}
