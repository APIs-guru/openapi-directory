import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayClientTlsCertificate } from "./virtualgatewayclienttlscertificate";
import { VirtualGatewayTlsValidationContext } from "./virtualgatewaytlsvalidationcontext";



// VirtualGatewayClientPolicyTls
/** 
 * An object that represents a Transport Layer Security (TLS) client policy.
**/
export class VirtualGatewayClientPolicyTls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: VirtualGatewayClientTlsCertificate;

  @SpeakeasyMetadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation: VirtualGatewayTlsValidationContext;
}
