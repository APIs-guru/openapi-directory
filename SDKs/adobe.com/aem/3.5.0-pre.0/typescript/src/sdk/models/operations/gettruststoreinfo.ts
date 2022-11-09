import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTruststoreInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  truststoreInfo?: shared.TruststoreInfo;

  @Metadata()
  getTruststoreInfoDefaultApplicationJsonString?: string;
}
