import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayListenerTlsFileCertificate
/** 
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
**/
export class VirtualGatewayListenerTlsFileCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateChain" })
  certificateChain: string;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey: string;
}
