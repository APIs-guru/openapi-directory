package shared

import (
	"time"
)

type CertificateValidity struct {
	NotAfter  *time.Time `json:"notAfter"`
	NotBefore *time.Time `json:"notBefore"`
}
