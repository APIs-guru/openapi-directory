import { SpeakeasyBase } from "../../../internal/utils";
import { RevocationConfiguration } from "./revocationconfiguration";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";
export declare class UpdateCertificateAuthorityRequest extends SpeakeasyBase {
    certificateAuthorityArn: string;
    revocationConfiguration?: RevocationConfiguration;
    status?: CertificateAuthorityStatusEnum;
}
