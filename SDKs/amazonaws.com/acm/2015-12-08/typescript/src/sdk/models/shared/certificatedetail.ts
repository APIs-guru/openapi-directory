import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: DomainValidation })
  domainValidationOptions?: DomainValidation[];

  @SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsages", elemType: ExtendedKeyUsage })
  extendedKeyUsages?: ExtendedKeyUsage[];

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: FailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=ImportedAt" })
  importedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=InUseBy" })
  inUseBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=IssuedAt" })
  issuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyAlgorithm" })
  keyAlgorithm?: KeyAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyUsages", elemType: KeyUsage })
  keyUsages?: KeyUsage[];

  @SpeakeasyMetadata({ data: "json, name=NotAfter" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotBefore" })
  notBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: CertificateOptions;

  @SpeakeasyMetadata({ data: "json, name=RenewalEligibility" })
  renewalEligibility?: RenewalEligibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=RenewalSummary" })
  renewalSummary?: RenewalSummary;

  @SpeakeasyMetadata({ data: "json, name=RevocationReason" })
  revocationReason?: RevocationReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=RevokedAt" })
  revokedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=SignatureAlgorithm" })
  signatureAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=SubjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: CertificateTypeEnum;
}
