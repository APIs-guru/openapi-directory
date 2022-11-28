import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TlsValidationContextAcmTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
**/
export class TlsValidationContextAcmTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorityArns" })
  certificateAuthorityArns: string[];
}
