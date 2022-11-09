import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProviderUserIdentifierType
/** 
 * A container for information about an identity provider for a user pool.
**/
export class ProviderUserIdentifierType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProviderAttributeName" })
  providerAttributeName?: string;

  @Metadata({ data: "json, name=ProviderAttributeValue" })
  providerAttributeValue?: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;
}
