import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionApiKeyAuthResponseParameters
/** 
 * Contains the authorization parameters for the connection if API Key is specified as the authorization type.
**/
export class ConnectionApiKeyAuthResponseParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeyName" })
  apiKeyName?: string;
}
