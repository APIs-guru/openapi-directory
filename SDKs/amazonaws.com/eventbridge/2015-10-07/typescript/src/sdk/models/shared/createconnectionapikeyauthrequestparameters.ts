import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateConnectionApiKeyAuthRequestParameters
/** 
 * Contains the API key authorization parameters for the connection.
**/
export class CreateConnectionApiKeyAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeyName" })
  apiKeyName: string;

  @SpeakeasyMetadata({ data: "json, name=ApiKeyValue" })
  apiKeyValue: string;
}
