import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    identityPoolId?: string;
    identityProviderName?: string;
    principalTags?: Map<string, string>;
    useDefaults?: boolean;
}
