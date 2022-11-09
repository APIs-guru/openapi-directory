import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";


// ProviderDescription
/** 
 * A container for identity provider details.
**/
export class ProviderDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: IdentityProviderTypeTypeEnum;
}
