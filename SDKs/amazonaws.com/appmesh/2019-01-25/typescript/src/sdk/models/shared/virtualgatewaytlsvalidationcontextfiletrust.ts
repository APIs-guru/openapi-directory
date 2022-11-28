import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayTlsValidationContextFileTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
**/
export class VirtualGatewayTlsValidationContextFileTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateChain" })
  certificateChain: string;
}
