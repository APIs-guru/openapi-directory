package shared

import (
	"time"
)

type CaCertificate struct {
	CertificateArn *string                  `json:"certificateArn,omitempty"`
	CertificateID  *string                  `json:"certificateId,omitempty"`
	CreationDate   *time.Time               `json:"creationDate,omitempty"`
	Status         *CaCertificateStatusEnum `json:"status,omitempty"`
}
