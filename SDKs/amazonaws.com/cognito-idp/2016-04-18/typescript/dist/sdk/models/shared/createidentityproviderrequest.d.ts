import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";
export declare class CreateIdentityProviderRequest extends SpeakeasyBase {
    attributeMapping?: Map<string, string>;
    idpIdentifiers?: string[];
    providerDetails: Map<string, string>;
    providerName: string;
    providerType: IdentityProviderTypeTypeEnum;
    userPoolId: string;
}
