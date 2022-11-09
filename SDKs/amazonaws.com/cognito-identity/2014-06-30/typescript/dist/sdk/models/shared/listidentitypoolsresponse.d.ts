import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityPoolShortDescription } from "./identitypoolshortdescription";
/**
 * The result of a successful ListIdentityPools action.
**/
export declare class ListIdentityPoolsResponse extends SpeakeasyBase {
    identityPools?: IdentityPoolShortDescription[];
    nextToken?: string;
}
