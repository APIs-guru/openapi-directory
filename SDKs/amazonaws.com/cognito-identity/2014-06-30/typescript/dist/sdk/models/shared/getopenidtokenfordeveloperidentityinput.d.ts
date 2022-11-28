import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
**/
export declare class GetOpenIdTokenForDeveloperIdentityInput extends SpeakeasyBase {
    identityId?: string;
    identityPoolId: string;
    logins: Map<string, string>;
    principalTags?: Map<string, string>;
    tokenDuration?: number;
}
