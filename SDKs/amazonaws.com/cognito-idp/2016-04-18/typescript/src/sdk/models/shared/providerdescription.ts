import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";



// ProviderDescription
/** 
 * A container for identity provider details.
**/
export class ProviderDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: IdentityProviderTypeTypeEnum;
}
