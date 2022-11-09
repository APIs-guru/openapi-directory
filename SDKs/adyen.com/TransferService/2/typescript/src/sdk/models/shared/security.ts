import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-API-Key" })
  apiKey: string;
}


export class SchemeBasicAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
