import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";
/**
 * A container for information about an identity provider.
**/
export declare class IdentityProviderType extends SpeakeasyBase {
    attributeMapping?: Map<string, string>;
    creationDate?: Date;
    idpIdentifiers?: string[];
    lastModifiedDate?: Date;
    providerDetails?: Map<string, string>;
    providerName?: string;
    providerType?: IdentityProviderTypeTypeEnum;
    userPoolId?: string;
}
