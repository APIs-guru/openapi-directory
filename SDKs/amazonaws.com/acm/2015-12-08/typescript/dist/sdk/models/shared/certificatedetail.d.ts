import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainValidation } from "./domainvalidation";
import { ExtendedKeyUsage } from "./extendedkeyusage";
import { FailureReasonEnum } from "./failurereasonenum";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { KeyUsage } from "./keyusage";
import { CertificateOptions } from "./certificateoptions";
import { RenewalEligibilityEnum } from "./renewaleligibilityenum";
import { RenewalSummary } from "./renewalsummary";
import { RevocationReasonEnum } from "./revocationreasonenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
/**
 * Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request.
**/
export declare class CertificateDetail extends SpeakeasyBase {
    certificateArn?: string;
    certificateAuthorityArn?: string;
    createdAt?: Date;
    domainName?: string;
    domainValidationOptions?: DomainValidation[];
    extendedKeyUsages?: ExtendedKeyUsage[];
    failureReason?: FailureReasonEnum;
    importedAt?: Date;
    inUseBy?: string[];
    issuedAt?: Date;
    issuer?: string;
    keyAlgorithm?: KeyAlgorithmEnum;
    keyUsages?: KeyUsage[];
    notAfter?: Date;
    notBefore?: Date;
    options?: CertificateOptions;
    renewalEligibility?: RenewalEligibilityEnum;
    renewalSummary?: RenewalSummary;
    revocationReason?: RevocationReasonEnum;
    revokedAt?: Date;
    serial?: string;
    signatureAlgorithm?: string;
    status?: CertificateStatusEnum;
    subject?: string;
    subjectAlternativeNames?: string[];
    type?: CertificateTypeEnum;
}
