import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayTlsValidationContextFileTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
**/
export class VirtualGatewayTlsValidationContextFileTrust extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateChain" })
  certificateChain: string;
}
