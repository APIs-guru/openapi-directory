import { SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsAcmCertificate } from "./listenertlsacmcertificate";
import { ListenerTlsFileCertificate } from "./listenertlsfilecertificate";
import { ListenerTlsSdsCertificate } from "./listenertlssdscertificate";
/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
export declare class ListenerTlsCertificate extends SpeakeasyBase {
    acm?: ListenerTlsAcmCertificate;
    file?: ListenerTlsFileCertificate;
    sds?: ListenerTlsSdsCertificate;
}
