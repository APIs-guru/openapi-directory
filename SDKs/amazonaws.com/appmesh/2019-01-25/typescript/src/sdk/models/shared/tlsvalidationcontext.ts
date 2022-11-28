import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { TlsValidationContextTrust } from "./tlsvalidationcontexttrust";



// TlsValidationContext
/** 
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
**/
export class TlsValidationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust: TlsValidationContextTrust;
}
