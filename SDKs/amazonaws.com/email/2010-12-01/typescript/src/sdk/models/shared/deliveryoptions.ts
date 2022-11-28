import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsPolicyEnum } from "./tlspolicyenum";



// DeliveryOptions
/** 
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
export class DeliveryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  tlsPolicy?: TlsPolicyEnum;
}
