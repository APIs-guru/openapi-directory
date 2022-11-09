import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// CertificateDetail
/** 
 * Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. 
**/
export class CertificateDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=DomainValidationOptions", elemType: shared.DomainValidation })
  domainValidationOptions?: DomainValidation[];

  @Metadata({ data: "json, name=ExtendedKeyUsages", elemType: shared.ExtendedKeyUsage })
  extendedKeyUsages?: ExtendedKeyUsage[];

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: FailureReasonEnum;

  @Metadata({ data: "json, name=ImportedAt" })
  importedAt?: Date;

  @Metadata({ data: "json, name=InUseBy" })
  inUseBy?: string[];

  @Metadata({ data: "json, name=IssuedAt" })
  issuedAt?: Date;

  @Metadata({ data: "json, name=Issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=KeyAlgorithm" })
  keyAlgorithm?: KeyAlgorithmEnum;

  @Metadata({ data: "json, name=KeyUsages", elemType: shared.KeyUsage })
  keyUsages?: KeyUsage[];

  @Metadata({ data: "json, name=NotAfter" })
  notAfter?: Date;

  @Metadata({ data: "json, name=NotBefore" })
  notBefore?: Date;

  @Metadata({ data: "json, name=Options" })
  options?: CertificateOptions;

  @Metadata({ data: "json, name=RenewalEligibility" })
  renewalEligibility?: RenewalEligibilityEnum;

  @Metadata({ data: "json, name=RenewalSummary" })
  renewalSummary?: RenewalSummary;

  @Metadata({ data: "json, name=RevocationReason" })
  revocationReason?: RevocationReasonEnum;

  @Metadata({ data: "json, name=RevokedAt" })
  revokedAt?: Date;

  @Metadata({ data: "json, name=Serial" })
  serial?: string;

  @Metadata({ data: "json, name=SignatureAlgorithm" })
  signatureAlgorithm?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CertificateStatusEnum;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;

  @Metadata({ data: "json, name=SubjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
