import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayTlsValidationContextFileTrust } from "./virtualgatewaytlsvalidationcontextfiletrust";
import { VirtualGatewayTlsValidationContextSdsTrust } from "./virtualgatewaytlsvalidationcontextsdstrust";



// VirtualGatewayListenerTlsValidationContextTrust
/** 
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
**/
export class VirtualGatewayListenerTlsValidationContextTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: VirtualGatewayTlsValidationContextFileTrust;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: VirtualGatewayTlsValidationContextSdsTrust;
}
