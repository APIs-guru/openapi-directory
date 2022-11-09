import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";


// IdentityProviderType
/** 
 * A container for information about an identity provider.
**/
export class IdentityProviderType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeMapping" })
  attributeMapping?: Map<string, string>;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=IdpIdentifiers" })
  idpIdentifiers?: string[];

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=ProviderDetails" })
  providerDetails?: Map<string, string>;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: IdentityProviderTypeTypeEnum;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId?: string;
}
