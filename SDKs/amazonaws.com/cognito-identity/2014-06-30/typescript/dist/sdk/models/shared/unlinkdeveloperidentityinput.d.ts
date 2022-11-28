import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the <code>UnlinkDeveloperIdentity</code> action.
**/
export declare class UnlinkDeveloperIdentityInput extends SpeakeasyBase {
    developerProviderName: string;
    developerUserIdentifier: string;
    identityId: string;
    identityPoolId: string;
}
