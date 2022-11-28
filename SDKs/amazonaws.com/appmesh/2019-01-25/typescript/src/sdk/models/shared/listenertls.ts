import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsCertificate } from "./listenertlscertificate";
import { ListenerTlsModeEnum } from "./listenertlsmodeenum";
import { ListenerTlsValidationContext } from "./listenertlsvalidationcontext";



// ListenerTls
/** 
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
export class ListenerTls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: ListenerTlsCertificate;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: ListenerTlsModeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: ListenerTlsValidationContext;
}
