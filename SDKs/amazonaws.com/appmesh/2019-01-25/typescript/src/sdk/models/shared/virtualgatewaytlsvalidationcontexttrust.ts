import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayTlsValidationContextAcmTrust } from "./virtualgatewaytlsvalidationcontextacmtrust";
import { VirtualGatewayTlsValidationContextFileTrust } from "./virtualgatewaytlsvalidationcontextfiletrust";
import { VirtualGatewayTlsValidationContextSdsTrust } from "./virtualgatewaytlsvalidationcontextsdstrust";


// VirtualGatewayTlsValidationContextTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
export class VirtualGatewayTlsValidationContextTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=acm" })
  acm?: VirtualGatewayTlsValidationContextAcmTrust;

  @Metadata({ data: "json, name=file" })
  file?: VirtualGatewayTlsValidationContextFileTrust;

  @Metadata({ data: "json, name=sds" })
  sds?: VirtualGatewayTlsValidationContextSdsTrust;
}
