import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionApiKeyAuthResponseParameters
/** 
 * Contains the authorization parameters for the connection if API Key is specified as the authorization type.
**/
export class ConnectionApiKeyAuthResponseParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeyName" })
  apiKeyName?: string;
}
