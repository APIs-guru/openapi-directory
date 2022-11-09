import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TlsConfig
/** 
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export class TlsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerNameToVerify" })
  serverNameToVerify?: string;
}
