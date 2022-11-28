import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderConfig } from "./identityproviderconfig";
export declare class ListIdentityProviderConfigsResponse extends SpeakeasyBase {
    identityProviderConfigs?: IdentityProviderConfig[];
    nextToken?: string;
}
