import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateIdentityProviderRequest extends SpeakeasyBase {
    attributeMapping?: Map<string, string>;
    idpIdentifiers?: string[];
    providerDetails?: Map<string, string>;
    providerName: string;
    userPoolId: string;
}
