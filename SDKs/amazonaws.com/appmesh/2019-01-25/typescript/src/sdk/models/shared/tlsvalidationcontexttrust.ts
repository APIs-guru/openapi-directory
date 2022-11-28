import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsValidationContextAcmTrust } from "./tlsvalidationcontextacmtrust";
import { TlsValidationContextFileTrust } from "./tlsvalidationcontextfiletrust";
import { TlsValidationContextSdsTrust } from "./tlsvalidationcontextsdstrust";



// TlsValidationContextTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
export class TlsValidationContextTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acm" })
  acm?: TlsValidationContextAcmTrust;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: TlsValidationContextFileTrust;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: TlsValidationContextSdsTrust;
}
