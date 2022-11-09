import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TlsValidationContextAcmTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
**/
export class TlsValidationContextAcmTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthorityArns" })
  certificateAuthorityArns: string[];
}
