import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateConnectionApiKeyAuthRequestParameters
/** 
 * Contains the API key authorization parameters to use to update the connection.
**/
export class UpdateConnectionApiKeyAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeyName" })
  apiKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiKeyValue" })
  apiKeyValue?: string;
}
