import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
**/
export declare class VirtualGatewayListenerTlsFileCertificate extends SpeakeasyBase {
    certificateChain: string;
    privateKey: string;
}
