import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export declare class JwtConfiguration extends SpeakeasyBase {
    audience?: string[];
    issuer?: string;
}
