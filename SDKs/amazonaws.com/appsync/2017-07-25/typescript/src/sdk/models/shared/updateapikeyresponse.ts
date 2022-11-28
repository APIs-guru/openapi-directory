import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";



export class UpdateApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: ApiKey;
}
