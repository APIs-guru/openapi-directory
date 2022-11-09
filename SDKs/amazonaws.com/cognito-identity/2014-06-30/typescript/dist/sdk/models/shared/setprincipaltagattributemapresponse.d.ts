import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    identityPoolId?: string;
    identityProviderName?: string;
    principalTags?: Map<string, string>;
    useDefaults?: boolean;
}
