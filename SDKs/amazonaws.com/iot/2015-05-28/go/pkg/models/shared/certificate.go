package shared

import (
	"time"
)

type Certificate struct {
	CertificateArn  *string                `json:"certificateArn"`
	CertificateID   *string                `json:"certificateId"`
	CertificateMode *CertificateModeEnum   `json:"certificateMode"`
	CreationDate    *time.Time             `json:"creationDate"`
	Status          *CertificateStatusEnum `json:"status"`
}
