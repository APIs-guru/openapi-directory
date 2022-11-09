import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TlsValidationContextAcmTrust } from "./tlsvalidationcontextacmtrust";
import { TlsValidationContextFileTrust } from "./tlsvalidationcontextfiletrust";
import { TlsValidationContextSdsTrust } from "./tlsvalidationcontextsdstrust";


// TlsValidationContextTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
export class TlsValidationContextTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=acm" })
  acm?: TlsValidationContextAcmTrust;

  @Metadata({ data: "json, name=file" })
  file?: TlsValidationContextFileTrust;

  @Metadata({ data: "json, name=sds" })
  sds?: TlsValidationContextSdsTrust;
}
