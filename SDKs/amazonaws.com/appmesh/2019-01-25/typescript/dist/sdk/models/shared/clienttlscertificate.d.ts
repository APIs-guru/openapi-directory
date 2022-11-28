import { SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsFileCertificate } from "./listenertlsfilecertificate";
import { ListenerTlsSdsCertificate } from "./listenertlssdscertificate";
/**
 * An object that represents the client's certificate.
**/
export declare class ClientTlsCertificate extends SpeakeasyBase {
    file?: ListenerTlsFileCertificate;
    sds?: ListenerTlsSdsCertificate;
}
