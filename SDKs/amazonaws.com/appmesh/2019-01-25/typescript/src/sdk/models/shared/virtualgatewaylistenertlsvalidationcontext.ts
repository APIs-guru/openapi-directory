import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { VirtualGatewayListenerTlsValidationContextTrust } from "./virtualgatewaylistenertlsvalidationcontexttrust";


// VirtualGatewayListenerTlsValidationContext
/** 
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
**/
export class VirtualGatewayListenerTlsValidationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @Metadata({ data: "json, name=trust" })
  trust: VirtualGatewayListenerTlsValidationContextTrust;
}
