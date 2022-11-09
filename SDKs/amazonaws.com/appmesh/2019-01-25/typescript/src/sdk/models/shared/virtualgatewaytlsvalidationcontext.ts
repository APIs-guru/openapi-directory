import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { VirtualGatewayTlsValidationContextTrust } from "./virtualgatewaytlsvalidationcontexttrust";


// VirtualGatewayTlsValidationContext
/** 
 * An object that represents a Transport Layer Security (TLS) validation context.
**/
export class VirtualGatewayTlsValidationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @Metadata({ data: "json, name=trust" })
  trust: VirtualGatewayTlsValidationContextTrust;
}
