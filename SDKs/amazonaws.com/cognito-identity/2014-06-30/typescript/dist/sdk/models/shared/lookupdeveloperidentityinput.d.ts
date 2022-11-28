import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the <code>LookupDeveloperIdentityInput</code> action.
**/
export declare class LookupDeveloperIdentityInput extends SpeakeasyBase {
    developerUserIdentifier?: string;
    identityId?: string;
    identityPoolId: string;
    maxResults?: number;
    nextToken?: string;
}
