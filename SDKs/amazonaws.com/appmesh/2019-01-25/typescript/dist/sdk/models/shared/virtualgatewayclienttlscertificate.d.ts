import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayListenerTlsFileCertificate } from "./virtualgatewaylistenertlsfilecertificate";
import { VirtualGatewayListenerTlsSdsCertificate } from "./virtualgatewaylistenertlssdscertificate";
/**
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
**/
export declare class VirtualGatewayClientTlsCertificate extends SpeakeasyBase {
    file?: VirtualGatewayListenerTlsFileCertificate;
    sds?: VirtualGatewayListenerTlsSdsCertificate;
}
