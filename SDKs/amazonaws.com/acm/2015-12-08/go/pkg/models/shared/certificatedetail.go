package shared

import (
	"time"
)

type CertificateDetail struct {
	CertificateArn          *string                 `json:"CertificateArn"`
	CertificateAuthorityArn *string                 `json:"CertificateAuthorityArn"`
	CreatedAt               *time.Time              `json:"CreatedAt"`
	DomainName              *string                 `json:"DomainName"`
	DomainValidationOptions []DomainValidation      `json:"DomainValidationOptions"`
	ExtendedKeyUsages       []ExtendedKeyUsage      `json:"ExtendedKeyUsages"`
	FailureReason           *FailureReasonEnum      `json:"FailureReason"`
	ImportedAt              *time.Time              `json:"ImportedAt"`
	InUseBy                 []string                `json:"InUseBy"`
	IssuedAt                *time.Time              `json:"IssuedAt"`
	Issuer                  *string                 `json:"Issuer"`
	KeyAlgorithm            *KeyAlgorithmEnum       `json:"KeyAlgorithm"`
	KeyUsages               []KeyUsage              `json:"KeyUsages"`
	NotAfter                *time.Time              `json:"NotAfter"`
	NotBefore               *time.Time              `json:"NotBefore"`
	Options                 *CertificateOptions     `json:"Options"`
	RenewalEligibility      *RenewalEligibilityEnum `json:"RenewalEligibility"`
	RenewalSummary          *RenewalSummary         `json:"RenewalSummary"`
	RevocationReason        *RevocationReasonEnum   `json:"RevocationReason"`
	RevokedAt               *time.Time              `json:"RevokedAt"`
	Serial                  *string                 `json:"Serial"`
	SignatureAlgorithm      *string                 `json:"SignatureAlgorithm"`
	Status                  *CertificateStatusEnum  `json:"Status"`
	Subject                 *string                 `json:"Subject"`
	SubjectAlternativeNames []string                `json:"SubjectAlternativeNames"`
	Type                    *CertificateTypeEnum    `json:"Type"`
}
