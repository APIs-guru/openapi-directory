import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An authorization token data object that corresponds to a public registry.
**/
export declare class AuthorizationData extends SpeakeasyBase {
    authorizationToken?: string;
    expiresAt?: Date;
}
