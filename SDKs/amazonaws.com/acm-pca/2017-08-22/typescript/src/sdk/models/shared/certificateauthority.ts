import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfiguration } from "./certificateauthorityconfiguration";
import { FailureReasonEnum } from "./failurereasonenum";
import { KeyStorageSecurityStandardEnum } from "./keystoragesecuritystandardenum";
import { RevocationConfiguration } from "./revocationconfiguration";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";
import { CertificateAuthorityTypeEnum } from "./certificateauthoritytypeenum";



// CertificateAuthority
/** 
 * Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM). 
**/
export class CertificateAuthority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityConfiguration" })
  certificateAuthorityConfiguration?: CertificateAuthorityConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: FailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyStorageSecurityStandard" })
  keyStorageSecurityStandard?: KeyStorageSecurityStandardEnum;

  @SpeakeasyMetadata({ data: "json, name=LastStateChangeAt" })
  lastStateChangeAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotAfter" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotBefore" })
  notBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=OwnerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=RestorableUntil" })
  restorableUntil?: Date;

  @SpeakeasyMetadata({ data: "json, name=RevocationConfiguration" })
  revocationConfiguration?: RevocationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CertificateAuthorityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: CertificateAuthorityTypeEnum;
}
