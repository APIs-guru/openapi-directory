package shared

import (
	"time"
)

// CertificateInfo
// Contains general information about a certificate.
type CertificateInfo struct {
	CertificateID  *string               `json:"CertificateId,omitempty"`
	CommonName     *string               `json:"CommonName,omitempty"`
	ExpiryDateTime *time.Time            `json:"ExpiryDateTime,omitempty"`
	State          *CertificateStateEnum `json:"State,omitempty"`
	Type           *CertificateTypeEnum  `json:"Type,omitempty"`
}
