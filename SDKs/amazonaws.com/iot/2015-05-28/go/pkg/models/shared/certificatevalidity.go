package shared

import (
	"time"
)

type CertificateValidity struct {
	NotAfter  *time.Time `json:"notAfter,omitempty"`
	NotBefore *time.Time `json:"notBefore,omitempty"`
}
