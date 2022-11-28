package shared

import (
	"time"
)

// CertificateValidity
// When the certificate is valid.
type CertificateValidity struct {
	NotAfter  *time.Time `json:"notAfter,omitempty"`
	NotBefore *time.Time `json:"notBefore,omitempty"`
}
