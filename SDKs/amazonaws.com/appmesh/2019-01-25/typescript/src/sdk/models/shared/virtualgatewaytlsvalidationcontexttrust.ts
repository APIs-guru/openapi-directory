import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayTlsValidationContextAcmTrust } from "./virtualgatewaytlsvalidationcontextacmtrust";
import { VirtualGatewayTlsValidationContextFileTrust } from "./virtualgatewaytlsvalidationcontextfiletrust";
import { VirtualGatewayTlsValidationContextSdsTrust } from "./virtualgatewaytlsvalidationcontextsdstrust";



// VirtualGatewayTlsValidationContextTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
export class VirtualGatewayTlsValidationContextTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acm" })
  acm?: VirtualGatewayTlsValidationContextAcmTrust;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: VirtualGatewayTlsValidationContextFileTrust;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: VirtualGatewayTlsValidationContextSdsTrust;
}
