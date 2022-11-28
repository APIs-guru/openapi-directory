import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export declare class TlsConfig extends SpeakeasyBase {
    serverNameToVerify?: string;
}
