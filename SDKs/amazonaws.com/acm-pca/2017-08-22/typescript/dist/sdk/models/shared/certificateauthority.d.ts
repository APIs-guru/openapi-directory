import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfiguration } from "./certificateauthorityconfiguration";
import { FailureReasonEnum } from "./failurereasonenum";
import { KeyStorageSecurityStandardEnum } from "./keystoragesecuritystandardenum";
import { RevocationConfiguration } from "./revocationconfiguration";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";
import { CertificateAuthorityTypeEnum } from "./certificateauthoritytypeenum";
/**
 * Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM).
**/
export declare class CertificateAuthority extends SpeakeasyBase {
    arn?: string;
    certificateAuthorityConfiguration?: CertificateAuthorityConfiguration;
    createdAt?: Date;
    failureReason?: FailureReasonEnum;
    keyStorageSecurityStandard?: KeyStorageSecurityStandardEnum;
    lastStateChangeAt?: Date;
    notAfter?: Date;
    notBefore?: Date;
    ownerAccount?: string;
    restorableUntil?: Date;
    revocationConfiguration?: RevocationConfiguration;
    serial?: string;
    status?: CertificateAuthorityStatusEnum;
    type?: CertificateAuthorityTypeEnum;
}
