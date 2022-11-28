import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { VirtualGatewayListenerTlsValidationContextTrust } from "./virtualgatewaylistenertlsvalidationcontexttrust";



// VirtualGatewayListenerTlsValidationContext
/** 
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
**/
export class VirtualGatewayListenerTlsValidationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust: VirtualGatewayListenerTlsValidationContextTrust;
}
