package shared

import (
	"time"
)

// Certificate
// A certificate authority (CA) certificate for an account.
type Certificate struct {
	CertificateArn        *string
	CertificateIdentifier *string
	CertificateType       *string
	Thumbprint            *string
	ValidFrom             *time.Time
	ValidTill             *time.Time
}
