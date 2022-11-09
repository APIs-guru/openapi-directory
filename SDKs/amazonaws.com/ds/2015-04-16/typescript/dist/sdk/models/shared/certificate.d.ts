import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
/**
 * Information about the certificate.
**/
export declare class Certificate extends SpeakeasyBase {
    certificateId?: string;
    clientCertAuthSettings?: ClientCertAuthSettings;
    commonName?: string;
    expiryDateTime?: Date;
    registeredDateTime?: Date;
    state?: CertificateStateEnum;
    stateReason?: string;
    type?: CertificateTypeEnum;
}
