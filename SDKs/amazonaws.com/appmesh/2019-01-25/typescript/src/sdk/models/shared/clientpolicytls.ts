import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientTlsCertificate } from "./clienttlscertificate";
import { TlsValidationContext } from "./tlsvalidationcontext";



// ClientPolicyTls
/** 
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
**/
export class ClientPolicyTls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: ClientTlsCertificate;

  @SpeakeasyMetadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation: TlsValidationContext;
}
