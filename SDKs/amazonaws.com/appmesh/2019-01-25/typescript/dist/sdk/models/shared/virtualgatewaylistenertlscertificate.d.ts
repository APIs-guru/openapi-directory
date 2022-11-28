import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayListenerTlsAcmCertificate } from "./virtualgatewaylistenertlsacmcertificate";
import { VirtualGatewayListenerTlsFileCertificate } from "./virtualgatewaylistenertlsfilecertificate";
import { VirtualGatewayListenerTlsSdsCertificate } from "./virtualgatewaylistenertlssdscertificate";
/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
export declare class VirtualGatewayListenerTlsCertificate extends SpeakeasyBase {
    acm?: VirtualGatewayListenerTlsAcmCertificate;
    file?: VirtualGatewayListenerTlsFileCertificate;
    sds?: VirtualGatewayListenerTlsSdsCertificate;
}
