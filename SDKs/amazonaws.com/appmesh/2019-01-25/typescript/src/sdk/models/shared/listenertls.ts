import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListenerTlsCertificate } from "./listenertlscertificate";
import { ListenerTlsModeEnum } from "./listenertlsmodeenum";
import { ListenerTlsValidationContext } from "./listenertlsvalidationcontext";


// ListenerTls
/** 
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
export class ListenerTls extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: ListenerTlsCertificate;

  @Metadata({ data: "json, name=mode" })
  mode: ListenerTlsModeEnum;

  @Metadata({ data: "json, name=validation" })
  validation?: ListenerTlsValidationContext;
}
