import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateConnectionApiKeyAuthRequestParameters
/** 
 * Contains the API key authorization parameters to use to update the connection.
**/
export class UpdateConnectionApiKeyAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeyName" })
  apiKeyName?: string;

  @Metadata({ data: "json, name=ApiKeyValue" })
  apiKeyValue?: string;
}
