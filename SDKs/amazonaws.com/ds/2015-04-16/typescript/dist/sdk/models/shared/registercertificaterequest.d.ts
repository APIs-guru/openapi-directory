import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateTypeEnum } from "./certificatetypeenum";
export declare class RegisterCertificateRequest extends SpeakeasyBase {
    certificateData: string;
    clientCertAuthSettings?: ClientCertAuthSettings;
    directoryId: string;
    type?: CertificateTypeEnum;
}
