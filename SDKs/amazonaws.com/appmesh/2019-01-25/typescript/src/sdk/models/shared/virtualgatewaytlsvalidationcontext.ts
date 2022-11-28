import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { VirtualGatewayTlsValidationContextTrust } from "./virtualgatewaytlsvalidationcontexttrust";



// VirtualGatewayTlsValidationContext
/** 
 * An object that represents a Transport Layer Security (TLS) validation context.
**/
export class VirtualGatewayTlsValidationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust: VirtualGatewayTlsValidationContextTrust;
}
