import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TlsValidationContextFileTrust
/** 
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
**/
export class TlsValidationContextFileTrust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateChain" })
  certificateChain: string;
}
