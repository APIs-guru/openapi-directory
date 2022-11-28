package shared

import (
	"time"
)

// Certificate
// Information about a certificate.
type Certificate struct {
	CertificateArn  *string                `json:"certificateArn,omitempty"`
	CertificateID   *string                `json:"certificateId,omitempty"`
	CertificateMode *CertificateModeEnum   `json:"certificateMode,omitempty"`
	CreationDate    *time.Time             `json:"creationDate,omitempty"`
	Status          *CertificateStatusEnum `json:"status,omitempty"`
}
