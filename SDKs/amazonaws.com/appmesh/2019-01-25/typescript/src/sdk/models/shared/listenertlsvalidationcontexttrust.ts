import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsValidationContextFileTrust } from "./tlsvalidationcontextfiletrust";
import { TlsValidationContextSdsTrust } from "./tlsvalidationcontextsdstrust";



// ListenerTlsValidationContextTrust
/** 
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
**/
export class ListenerTlsValidationContextTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: TlsValidationContextFileTrust;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: TlsValidationContextSdsTrust;
}
