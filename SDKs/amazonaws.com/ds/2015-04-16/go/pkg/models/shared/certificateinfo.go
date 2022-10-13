package shared

import (
	"time"
)

type CertificateInfo struct {
	CertificateID  *string               `json:"CertificateId"`
	CommonName     *string               `json:"CommonName"`
	ExpiryDateTime *time.Time            `json:"ExpiryDateTime"`
	State          *CertificateStateEnum `json:"State"`
	Type           *CertificateTypeEnum  `json:"Type"`
}
