import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerScopeType } from "./resourceserverscopetype";
/**
 * A container for information about a resource server for a user pool.
**/
export declare class ResourceServerType extends SpeakeasyBase {
    identifier?: string;
    name?: string;
    scopes?: ResourceServerScopeType[];
    userPoolId?: string;
}
