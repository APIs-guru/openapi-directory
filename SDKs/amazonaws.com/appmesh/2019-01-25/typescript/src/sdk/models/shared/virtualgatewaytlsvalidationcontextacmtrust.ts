import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayTlsValidationContextAcmTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
**/
export class VirtualGatewayTlsValidationContextAcmTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthorityArns" })
  certificateAuthorityArns: string[];
}
