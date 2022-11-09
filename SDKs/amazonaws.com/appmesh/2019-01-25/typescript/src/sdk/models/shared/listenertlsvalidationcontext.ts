import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { ListenerTlsValidationContextTrust } from "./listenertlsvalidationcontexttrust";


// ListenerTlsValidationContext
/** 
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
**/
export class ListenerTlsValidationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: SubjectAlternativeNames;

  @Metadata({ data: "json, name=trust" })
  trust: ListenerTlsValidationContextTrust;
}
