import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The OAuth properties required for OAuth type authentication.
**/
export declare class OAuthProperties extends SpeakeasyBase {
    authCodeUrl: string;
    oAuthScopes: string[];
    tokenUrl: string;
}
