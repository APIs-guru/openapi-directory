import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAemProductInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAemProductInfoDefaultApplicationJsonStrings?: string[];
}
