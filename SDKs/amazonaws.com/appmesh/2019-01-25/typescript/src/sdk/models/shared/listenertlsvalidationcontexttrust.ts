import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TlsValidationContextFileTrust } from "./tlsvalidationcontextfiletrust";
import { TlsValidationContextSdsTrust } from "./tlsvalidationcontextsdstrust";


// ListenerTlsValidationContextTrust
/** 
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
**/
export class ListenerTlsValidationContextTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: TlsValidationContextFileTrust;

  @Metadata({ data: "json, name=sds" })
  sds?: TlsValidationContextSdsTrust;
}
