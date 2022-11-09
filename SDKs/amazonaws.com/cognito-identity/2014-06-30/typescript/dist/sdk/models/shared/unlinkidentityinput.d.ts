import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Input to the UnlinkIdentity action.
**/
export declare class UnlinkIdentityInput extends SpeakeasyBase {
    identityId: string;
    logins: Map<string, string>;
    loginsToRemove: string[];
}
