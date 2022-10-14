package shared

import (
	"time"
)

type Certificate struct {
	CertificateArn          *string    `json:"CertificateArn,omitempty"`
	CertificateCreationDate *time.Time `json:"CertificateCreationDate,omitempty"`
	CertificateIdentifier   *string    `json:"CertificateIdentifier,omitempty"`
	CertificateOwner        *string    `json:"CertificateOwner,omitempty"`
	CertificatePem          *string    `json:"CertificatePem,omitempty"`
	CertificateWallet       *string    `json:"CertificateWallet,omitempty"`
	KeyLength               *int64     `json:"KeyLength,omitempty"`
	SigningAlgorithm        *string    `json:"SigningAlgorithm,omitempty"`
	ValidFromDate           *time.Time `json:"ValidFromDate,omitempty"`
	ValidToDate             *time.Time `json:"ValidToDate,omitempty"`
}
