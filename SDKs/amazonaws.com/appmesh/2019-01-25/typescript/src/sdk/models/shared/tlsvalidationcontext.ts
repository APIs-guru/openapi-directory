import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { TlsValidationContextTrust } from "./tlsvalidationcontexttrust";


// TlsValidationContext
/** 
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
**/
export class TlsValidationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @Metadata({ data: "json, name=trust" })
  trust: TlsValidationContextTrust;
}
