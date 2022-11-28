import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";
/**
 * A container for identity provider details.
**/
export declare class ProviderDescription extends SpeakeasyBase {
    creationDate?: Date;
    lastModifiedDate?: Date;
    providerName?: string;
    providerType?: IdentityProviderTypeTypeEnum;
}
