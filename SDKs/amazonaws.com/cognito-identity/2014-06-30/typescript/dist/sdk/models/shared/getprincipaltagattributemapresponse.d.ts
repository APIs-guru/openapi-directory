import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    identityPoolId?: string;
    identityProviderName?: string;
    principalTags?: Map<string, string>;
    useDefaults?: boolean;
}
