import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientTlsCertificate } from "./clienttlscertificate";
import { TlsValidationContext } from "./tlsvalidationcontext";


// ClientPolicyTls
/** 
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
**/
export class ClientPolicyTls extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: ClientTlsCertificate;

  @Metadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @Metadata({ data: "json, name=ports" })
  ports?: number[];

  @Metadata({ data: "json, name=validation" })
  validation: TlsValidationContext;
}
