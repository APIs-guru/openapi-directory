package shared

import (
	"time"
)

// CertificateAuthority
// Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM).
type CertificateAuthority struct {
	Arn                               *string                            `json:"Arn,omitempty"`
	CertificateAuthorityConfiguration *CertificateAuthorityConfiguration `json:"CertificateAuthorityConfiguration,omitempty"`
	CreatedAt                         *time.Time                         `json:"CreatedAt,omitempty"`
	FailureReason                     *FailureReasonEnum                 `json:"FailureReason,omitempty"`
	KeyStorageSecurityStandard        *KeyStorageSecurityStandardEnum    `json:"KeyStorageSecurityStandard,omitempty"`
	LastStateChangeAt                 *time.Time                         `json:"LastStateChangeAt,omitempty"`
	NotAfter                          *time.Time                         `json:"NotAfter,omitempty"`
	NotBefore                         *time.Time                         `json:"NotBefore,omitempty"`
	OwnerAccount                      *string                            `json:"OwnerAccount,omitempty"`
	RestorableUntil                   *time.Time                         `json:"RestorableUntil,omitempty"`
	RevocationConfiguration           *RevocationConfiguration           `json:"RevocationConfiguration,omitempty"`
	Serial                            *string                            `json:"Serial,omitempty"`
	Status                            *CertificateAuthorityStatusEnum    `json:"Status,omitempty"`
	Type                              *CertificateAuthorityTypeEnum      `json:"Type,omitempty"`
}
