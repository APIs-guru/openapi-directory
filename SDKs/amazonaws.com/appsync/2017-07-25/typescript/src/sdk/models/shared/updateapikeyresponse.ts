import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiKey } from "./apikey";


export class UpdateApiKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: ApiKey;
}
