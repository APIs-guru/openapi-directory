import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
**/
export declare class LookupDeveloperIdentityResponse extends SpeakeasyBase {
    developerUserIdentifierList?: string[];
    identityId?: string;
    nextToken?: string;
}
