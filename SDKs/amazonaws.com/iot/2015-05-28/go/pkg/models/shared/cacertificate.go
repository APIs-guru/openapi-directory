package shared

import (
	"time"
)

type CaCertificate struct {
	CertificateArn *string                  `json:"certificateArn"`
	CertificateID  *string                  `json:"certificateId"`
	CreationDate   *time.Time               `json:"creationDate"`
	Status         *CaCertificateStatusEnum `json:"status"`
}
