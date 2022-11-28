package shared

import (
	"time"
)

// Certificate
// The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
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
