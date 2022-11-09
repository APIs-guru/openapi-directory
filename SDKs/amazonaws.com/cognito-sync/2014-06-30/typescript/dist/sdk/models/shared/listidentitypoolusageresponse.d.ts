import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityPoolUsage } from "./identitypoolusage";
/**
 * Returned for a successful ListIdentityPoolUsage request.
**/
export declare class ListIdentityPoolUsageResponse extends SpeakeasyBase {
    count?: number;
    identityPoolUsages?: IdentityPoolUsage[];
    maxResults?: number;
    nextToken?: string;
}
