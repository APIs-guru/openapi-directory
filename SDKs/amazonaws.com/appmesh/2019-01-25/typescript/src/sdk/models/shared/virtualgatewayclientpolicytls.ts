import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayClientTlsCertificate } from "./virtualgatewayclienttlscertificate";
import { VirtualGatewayTlsValidationContext } from "./virtualgatewaytlsvalidationcontext";


// VirtualGatewayClientPolicyTls
/** 
 * An object that represents a Transport Layer Security (TLS) client policy.
**/
export class VirtualGatewayClientPolicyTls extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: VirtualGatewayClientTlsCertificate;

  @Metadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @Metadata({ data: "json, name=ports" })
  ports?: number[];

  @Metadata({ data: "json, name=validation" })
  validation: VirtualGatewayTlsValidationContext;
}
