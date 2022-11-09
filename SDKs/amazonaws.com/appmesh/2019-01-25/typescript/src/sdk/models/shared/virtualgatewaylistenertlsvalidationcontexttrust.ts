import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayTlsValidationContextFileTrust } from "./virtualgatewaytlsvalidationcontextfiletrust";
import { VirtualGatewayTlsValidationContextSdsTrust } from "./virtualgatewaytlsvalidationcontextsdstrust";


// VirtualGatewayListenerTlsValidationContextTrust
/** 
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
**/
export class VirtualGatewayListenerTlsValidationContextTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: VirtualGatewayTlsValidationContextFileTrust;

  @Metadata({ data: "json, name=sds" })
  sds?: VirtualGatewayTlsValidationContextSdsTrust;
}
