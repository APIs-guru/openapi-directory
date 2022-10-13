package shared

import (
	"time"
)

type Certificate struct {
	CertificateArn          *string    `json:"CertificateArn"`
	CertificateCreationDate *time.Time `json:"CertificateCreationDate"`
	CertificateIdentifier   *string    `json:"CertificateIdentifier"`
	CertificateOwner        *string    `json:"CertificateOwner"`
	CertificatePem          *string    `json:"CertificatePem"`
	CertificateWallet       *string    `json:"CertificateWallet"`
	KeyLength               *int64     `json:"KeyLength"`
	SigningAlgorithm        *string    `json:"SigningAlgorithm"`
	ValidFromDate           *time.Time `json:"ValidFromDate"`
	ValidToDate             *time.Time `json:"ValidToDate"`
}
