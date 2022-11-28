import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfiguration } from "./certificateauthorityconfiguration";
import { CertificateAuthorityTypeEnum } from "./certificateauthoritytypeenum";
import { KeyStorageSecurityStandardEnum } from "./keystoragesecuritystandardenum";
import { RevocationConfiguration } from "./revocationconfiguration";
import { Tag } from "./tag";
export declare class CreateCertificateAuthorityRequest extends SpeakeasyBase {
    certificateAuthorityConfiguration: CertificateAuthorityConfiguration;
    certificateAuthorityType: CertificateAuthorityTypeEnum;
    idempotencyToken?: string;
    keyStorageSecurityStandard?: KeyStorageSecurityStandardEnum;
    revocationConfiguration?: RevocationConfiguration;
    tags?: Tag[];
}
