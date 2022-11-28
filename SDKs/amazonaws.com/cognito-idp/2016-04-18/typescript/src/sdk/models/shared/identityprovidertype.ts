import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";



// IdentityProviderType
/** 
 * A container for information about an identity provider.
**/
export class IdentityProviderType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeMapping" })
  attributeMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=IdpIdentifiers" })
  idpIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProviderDetails" })
  providerDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: IdentityProviderTypeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
