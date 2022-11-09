import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes an OpenID Connect configuration.
**/
export declare class OpenIdConnectConfig extends SpeakeasyBase {
    authTtl?: number;
    clientId?: string;
    iatTtl?: number;
    issuer: string;
}
