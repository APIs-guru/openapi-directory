import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateConnectionApiKeyAuthRequestParameters
/** 
 * Contains the API key authorization parameters for the connection.
**/
export class CreateConnectionApiKeyAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeyName" })
  apiKeyName: string;

  @Metadata({ data: "json, name=ApiKeyValue" })
  apiKeyValue: string;
}
