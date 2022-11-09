import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityDescription } from "./identitydescription";
/**
 * The response to a ListIdentities request.
**/
export declare class ListIdentitiesResponse extends SpeakeasyBase {
    identities?: IdentityDescription[];
    identityPoolId?: string;
    nextToken?: string;
}
