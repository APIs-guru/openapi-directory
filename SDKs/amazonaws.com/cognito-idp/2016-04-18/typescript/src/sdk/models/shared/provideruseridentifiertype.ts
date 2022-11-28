import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProviderUserIdentifierType
/** 
 * A container for information about an identity provider for a user pool.
**/
export class ProviderUserIdentifierType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProviderAttributeName" })
  providerAttributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderAttributeValue" })
  providerAttributeValue?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;
}
