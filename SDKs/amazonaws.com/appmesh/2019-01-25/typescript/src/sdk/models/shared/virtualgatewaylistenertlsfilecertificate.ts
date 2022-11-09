import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayListenerTlsFileCertificate
/** 
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
**/
export class VirtualGatewayListenerTlsFileCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateChain" })
  certificateChain: string;

  @Metadata({ data: "json, name=privateKey" })
  privateKey: string;
}
